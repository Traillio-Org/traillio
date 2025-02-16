/**
 * Profile Update API endpoint
*/

const API = require('../api');
const Leetcode = require('../lib/platforms/leetcode');
const Codeforces = require('../lib/platforms/codeforces');

module.exports = {

    type: 'post',
    route: '/profile/update',
    auth: true,

    handle: async (c) => {
        const body = await c.req.json();
        const tokenData = c.get('auth_user');

        if('profile' in body) {
            let data;
            
            try {
                data = await API.accounts.updateProfile(tokenData.id, body.profile);

                // Re-sync user if platforms are changed
                if ('platforms' in body.profile && Object.keys(body.profile.platforms).length > 0) {
                    if ('codeforces' in body.profile.platforms && body.profile.platforms.codeforces && body.profile.platforms.codeforces != "") {
                        Codeforces.database.syncUser(tokenData.id, body.profile.platforms.codeforces);
                        console.log(`Synced Codeforces for ${tokenData.id} due to profile update`);
                    }
                    if ('leetcode' in body.profile.platforms && body.profile.platforms.leetcode && body.profile.platforms.leetcode != "") {
                        await Leetcode.database.syncUser(tokenData.id, body.profile.platforms.leetcode);
                        console.log(`Synced Leetcode for ${tokenData.id} due to profile update`);

                        // Re-calculate LC score
                        (async () => {
                            const score = await API.ml.getLCScore(body.profile.platforms.leetcode);
                            await API.accounts.updateProfile(tokenData.id, {
                                stats: {
                                    points: score.prediction[0][0]
                                }
                            });
                        })();
                    }
                }
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