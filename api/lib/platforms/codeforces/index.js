/**
 * Codeforces Platform
*/

const config = require('../../../config.json');
const api = require('./api');
const database = require('./database');

module.exports = {
    api: api,
    database: database
};