/**
 * Database operations for Leetcode platform.
*/

const config = require('../../../config.json');
const db = require('../../../db').db;
const logger = require('../../../util').logger;
const api = require('./api');

module.exports = {

    /*
     * Add a single submission to database
    */
    async addSubmission(id, problemSlug) {
        await db.query(`IF ((SELECT * FROM solved_problems WHERE in = ${id} AND out = leetcode_problems:\`${problemSlug}\`).is_empty()) {
            RELATE ${id}->solved_problems->leetcode_problems:\`${problemSlug}\` SET
                platform = "leetcode",
                timestamp = ${Math.round(Date.now() / 1000)},
                language = null;
            };`
        );
    },

    /*
     * Sync user submissions on Leetcode with database
    */
    async syncUserSubmissions(id, username, limit = 20) {
        // Get user's recent accepted submissions
        const recentSubmissions = await api.getRecentAcceptedSubmissions(username, limit);
        const problems = recentSubmissions.submission;

        function buildQuery(problem) {
            return `IF ((SELECT * FROM solved_problems WHERE in = ${id} AND out = leetcode_problems:\`${problem.titleSlug}\`).is_empty()) {
                RELATE ${id}->solved_problems->leetcode_problems:\`${problem.titleSlug}\` SET
                    platform = "leetcode",
                    timestamp = ${db.escape(problem.timestamp)},
                    language = ${db.escape(problem.lang)};
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

    /*
     * Sync database with latest problem sets from Leetcode
    */
    async updateDatabase() {
        const startTime = Date.now();

        // Get all problems from Leetcode
        const problemSet = await api.getProblems(100000);

        function buildQuery(problem) {
            return `UPSERT leetcode_problems:\`${problem.titleSlug}\` SET
                acceptance_rate = ${db.escape(problem.acRate)},
                difficulty = ${db.escape(problem.difficulty.toLowerCase())},
                index = ${db.escape(problem.questionFrontendId)},
                title = ${db.escape(problem.title)},
                tags = ${db.escape(problem.topicTags)};`
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

            logger.log(`Leetcode problem set updated in database! [Time: ${timeElapsed}s, Query length: ${txnString.length}]`);
        } catch (e) {
            console.error(`Failed to update Leetcode problem set in database`);
            throw e;
        }
    }

};