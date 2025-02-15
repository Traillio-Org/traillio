/**
 * Database operations for Codeforces platform.
*/

const { StringRecordId } = require('surrealdb');
const config = require('../../../config.json');
const db = require('../../../db').db;
const logger = require('../../../util').logger;
const api = require('./api');

module.exports = {

    /**
     * Add a single submission to database
     * @param {number} id - User Id
     * @param {number} contestId - Contest ID
     * @param {string} problemIndex - Problem Index with respect to contest
     * 
    */
    async addSubmission(id, contestId, problemIndex) {
        await db.query(`IF ((SELECT * FROM solved_problems WHERE in = ${id} AND out = codeforces_problems:\`${contestId}_${problemIndex}\`).is_empty()) {
            RELATE ${id}->solved_problems->codeforces_problems:\`${contestId}_${problemIndex}\` SET
                platform = "codeforces",
                timestamp = ${Math.round(Date.now() / 1000)},
                language = null,
                contest_id = ${contestId},
                points = null,
                performance = null;
            };`
        );
    },

    async syncUser(id, username, limit = null) {
        await this.syncUserSubmissions(id, username, limit);

        // Get user's profile
        const profile = await api.getProfile(username);

        // Get user's submissions
        const submissions = await api.getSubmissions(username, "OK", limit);

        // Find languages used and count each
        let accepted = submissions.length;
        let langs = {};

        submissions.forEach(submission => {
            if (submission.programmingLanguage in langs) {
                langs[submission.programmingLanguage]++;
            } else {
                langs[submission.programmingLanguage] = 1;
            }
        });

        // Update user's stats in database
        let update = {
            stats: {
                codeforces: {
                    // rating: profile.rating,
                    // max_rating: profile.maxRating,
                    // rank: profile.rank,
                    // max_rank: profile.maxRank,
                    langs: Object.keys(langs).map(lang => {return {
                        name: lang,
                        count: langs[lang]
                    }}),
                    total_solved: accepted
                }
            }
        };

        try {
            await db.query(`UPDATE $id MERGE $obj;`, {
                id: new StringRecordId(id),
                obj: update
            });
        } catch (e) {
            throw e;
        }
    },

    /**
     * Sync user submissions on Codeforces with database
    */
    async syncUserSubmissions(id, username, limit = null) {
        // Get user's accepted submissions
        const acceptedSubmissions = await api.getSubmissions(username, "OK", limit);
        const problems = acceptedSubmissions;

        function buildQuery(entry) {
            return `IF ((SELECT * FROM solved_problems WHERE in = ${id} AND out = codeforces_problems:\`${entry.problem.contestId}_${entry.problem.index}\`).is_empty()) {
                RELATE ${id}->solved_problems->codeforces_problems:\`${entry.problem.contestId}_${entry.problem.index}\` SET
                    platform = "codeforces",
                    timestamp = ${db.escape(entry.creationTimeSeconds)},
                    language = ${db.escape(entry.programmingLanguage)},
                    contest_id = ${entry.contestId ? db.escape(entry.contestId) : db.escape(null)},
                    points = ${entry.points ? db.escape(entry.points) : db.escape(null)},
                    performance = ${db.escape({ time: entry.timeConsumedMillis, memory: entry.memoryConsumedBytes })};
                };`
            ;
        }

        let txnString = `BEGIN TRANSACTION;`;
        for (const problem of problems) {
            txnString += buildQuery(problem);
        }
        txnString += `COMMIT TRANSACTION;`;

        // Execute the query
        try {
            await db.query(txnString);
        } catch (e) {
            throw e;
        }
    },

    /**
     * Sync database with latest problem sets from Codeforces
    */
    async updateDatabase() {
        const startTime = Date.now();

        // Get all problems from Codeforces
        const problemSet = await api.getProblems();

        function buildQuery(problem) {
            return `UPSERT codeforces_problems:\`${problem.contestId}_${problem.index}\` SET
                contest_id = ${db.escape(problem.contestId)},
                index = ${db.escape(problem.index)},
                type = ${db.escape(problem.type)},
                title = ${db.escape(problem.name)},
                tags = ${db.escape(problem.tags)};
                rating = ${db.escape(problem.rating)};`
            ;
        }

        let txnString = `BEGIN TRANSACTION;`;
        for (const problem of problemSet.problems) {
            txnString += buildQuery(problem);
        }
        txnString += `COMMIT TRANSACTION;`;

        // Execute the query
        try {
            await db.query(txnString);
            const timeElapsed = Math.round((Date.now() - startTime) / 1000);

            logger.log(`Codeforces problem set updated in database! [Time: ${timeElapsed}s, Query length: ${txnString.length}]`);
        } catch (e) {
            console.error(`Failed to update Codeforces problem set in database`);
            throw e;
        }
    },

    /**
     * Sync database with latest Contests from Codeforces.
    */
    async updateContests() {
        const startTime = Date.now();

        // Get all contests from Codeforces
        const contests = await api.getContests();

        function buildQuery(contest) {
            return `UPSERT codeforces_contests:\`${contest.id}\` SET
                name = ${db.escape(contest.name)},
                type = ${db.escape(contest.type)},
                phase = ${db.escape(contest.phase)},
                frozen = ${db.escape(contest.frozen)},
                duration = ${db.escape(contest.durationSeconds)};
                start = ${db.escape(contest.startTimeSeconds)};`
            ;
        }

        let txnString = `BEGIN TRANSACTION;`;
        for (const contest of contests) {
            txnString += buildQuery(contest);
        }
        txnString += `COMMIT TRANSACTION;`;

        // Execute the query
        try {
            await db.query(txnString);
            const timeElapsed = Math.round((Date.now() - startTime) / 1000);

            logger.log(`Codeforces Contest list updated in database! [Time: ${timeElapsed}s, Query length: ${txnString.length}]`);
        } catch (e) {
            console.error(`Failed to update Codeforces Contest list in database`);
            throw e;
        }
    }

};