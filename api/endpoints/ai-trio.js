/**
 * Trio API endpoint
*/

const API = require('../api');
const leetcode = require('../lib/platforms/leetcode');

module.exports = {

    type: 'post',
    route: '/ai/trio',
    auth: true,

    handle: async (c) => {
        const body = await c.req.json();

        if('message' in body && 'history' in body && 'url' in body) {
            let data;
            
            try {
                data = await API.llm.trioRespond(body.message, body.history);
            } catch(e) {
                c.status(e.status);
                return c.json({
                    message: e.message,
                    code: e.code
                });
            }

            return c.json(data);
        } else {
            c.status(400);
            return c.json({
                message: 'Malformed request'
            });
        }
    }

};