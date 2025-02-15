/**
 * LeetCode Platform API
*/

const config = require('../../../config.json');
const axios = require('axios');
const {Window} = require('happy-dom');

const API_URL = `http://localhost:${config.api.leetcodeApiPort}`;

module.exports = {

    /**
     * Get problem statement from a given Leetcode URL.
    */
    async getProblemStatement(url) {
        // Check if input is a string and not empty
        if (typeof url !== 'string' || !url.trim()) {
            throw new Error('Input must be a non-empty string');
        }
    
        // Parse the URL
        const urlObject = new URL(url);
    
        // Validate domain
        const validDomains = ['leetcode.com', 'www.leetcode.com'];
        if (!validDomains.includes(urlObject.hostname)) {
            throw new Error('Invalid domain. URL must be from leetcode.com');
        }
    
        // Validate URL path structure
        const pathSegments = urlObject.pathname.split('/').filter(segment => segment);
    
        if (pathSegments[0] !== 'problems') {
            throw new Error('URL must start with /problems/');
        }
    
        // Validate problem name
        const problemName = pathSegments[1];
        if (!problemName || !/^[a-zA-Z0-9-]+$/.test(problemName)) {
            throw new Error('Invalid problem name format');
        }

        // Fetch the problem statement
        const response = await axios.get(API_URL + `/select?titleSlug=${problemName}`);

        if ("errors" in response.data) throw new Error(JSON.stringify(response.data.errors));

        return response.data;
    },

    /*
     * Fetch basic profile from a given username
    */
    async getProfile(username) {
        const response = await axios.get(API_URL + `/${username}`);

        if ("errors" in response.data) throw new Error(JSON.stringify(response.data.errors));

        return response.data;
    },

    /*
     * Get total submission stats from user segregated by difficulty
    */
    async getSubmissionStats(username) {
        const response = await axios.get(API_URL + `/${username}`);

        if ("errors" in response.data) throw new Error(JSON.stringify(response.data.errors));

        return response.data;
    },

    /*
     * Get recently accepted submissions
     * Leetcode has a limitation of last 20 submissions only.
    */
    async getRecentAcceptedSubmissions(username, limit = 20) {
        const response = await axios.get(API_URL + `/${username}/acSubmission?limit=${limit}`);

        if ("errors" in response.data) throw new Error(JSON.stringify(response.data.errors));

        return response.data;
    },

    /*
     * Get list of problems from Leetcode, along with total number of problems in the platform
     * It is possible to fetch all problem sets from Leetcode using this function, with a high enough limit
    */
    async getProblems(limit) {
        const response = await axios.get(API_URL + `/problems?limit=${limit}`);

        if ("errors" in response.data) throw new Error(JSON.stringify(response.data.errors));

        const totalQuestions = response.data.totalQuestions;

        // Filter the problems we want
        const problems = response.data.problemsetQuestionList.filter(problem => {
            if (problem.isPaidOnly === true) return false;
            else return true;
        });

        return {
            totalProblems: totalQuestions,
            problems: problems
        };
    }

};