/**
 * Codeforces Platform API
*/

const config = require('../../../config.json');
const axios = require('axios');
const API_URL = `https://codeforces.com/api`;

module.exports = {

    /*
     * Fetch basic profile from a given username
    */
    async getProfile(username) {
        const response = await axios.get(API_URL + `/user.info?handles=${username}&checkHistoricHandles=false`);

        if (response.data.status !== "OK") throw new Error(response.data.comment);

        return response.data.result;
    },

    /*
     * Get list of submissions from a given username.
     * Possible types are: FAILED, OK, PARTIAL, COMPILATION_ERROR, RUNTIME_ERROR, WRONG_ANSWER, WRONG_ANSWER, TIME_LIMIT_EXCEEDED,
     * MEMORY_LIMIT_EXCEEDED, IDLENESS_LIMIT_EXCEEDED, SECURITY_VIOLATED, CRASHED, INPUT_PREPARATION_CRASHED, CHALLENGED, SKIPPED,
     * TESTING, REJECTED
     * If type is null, returns all types of submissions
     * If limit is null, returns all submissions without limits
    */
    async getSubmissions(username, type = null, limit = null) {
        const url = API_URL + `/user.status?handle=${username}` + (limit ? `&count=${limit}` : ``);
        const response = await axios.get(url);

        if (response.data.status !== "OK") throw new Error(response.data.comment);

        if (type) {
            return response.data.result.filter(item => item.verdict === type);
        } else return response.data.result;
    },

    /*
     * Get a list of problems from Codeforces, from an array of tags.
     * If `tags` is null, returns all problems in the platform.
    */
    async getProblems(tags) {
        const url = API_URL + '/problemset.problems' + (tags ? `?tags=${tags.join(",")}` : ``);
        const response = await axios.get(url);

        if (response.data.status !== "OK") throw new Error(response.data.comment);

        return response.data.result;
    },

    /**
     * Get a list of upcoming, ongoing and past Contests.
     * By default, we exclude Gym contests.
    */
    async getContests(includeGym = false) {
        const url = API_URL + `/contest.list?gym=${includeGym ? 'true' : 'false'}`;
        const response = await axios.get(url);

        if (response.data.status !== "OK") throw new Error(response.data.comment);

        return response.data.result;
    },

};