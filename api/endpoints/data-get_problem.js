/**
 * Get Problem statement API endpoint
*/

const API = require('../api');
const leetcode = require('../lib/platforms/leetcode');

module.exports = {

    type: 'post',
    route: '/data/get_problem',
    auth: true,

    handle: async (c) => {
        const body = await c.req.json();

        if('url' in body) {
            let data;
            
            try {
                const ps = await leetcode.api.getProblemStatement(body.url);
                data = {
                    problemTitle: ps.questionTitle,
                    question: ps.question,
                    exampleTests: ps.exampleTestcases,
                    topicTags: ps.topicTags,
                    hints: ps.hints,
                };
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