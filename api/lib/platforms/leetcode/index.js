/**
 * Leetcode Platform
*/

const config = require('../../../config.json');
const api = require('./api');
const lcDatabase = require('./database');

module.exports = {
    api: api,
    database: lcDatabase
};