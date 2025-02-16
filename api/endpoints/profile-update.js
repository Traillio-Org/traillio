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
                
                // Re-calculate stress prediction
                if ('profile' in body.profile && Object.keys(body.profile.profile).length > 0 && body.profile.profile.study_hrs_per_day && body.profile.profile.cgpa) {
                    const stressPrediction = await API.ml.getStressPrediction(tokenData.id);
                    await API.accounts.updateProfile(tokenData.id, {
                        stats: {
                            stress: stressPrediction
                        }
                    });
                    console.log(`Updated stress prediction for ${tokenData.id} due to profile update: ${stressPrediction}`);
                }

                // Re-sync user if platforms are changed
                if ('platforms' in body.profile && Object.keys(body.profile.platforms).length > 0) {
                    if ('codeforces' in body.profile.platforms && body.profile.platforms.codeforces && body.profile.platforms.codeforces != "") {
                        Codeforces.database.syncUser(tokenData.id, body.profile.platforms.codeforces);
                        console.log(`Synced Codeforces for ${tokenData.id} due to profile update`);

                        // Re-calculate CF score
                        (async () => {
                            const score = await API.ml.getCFScore(body.profile.platforms.codeforces);
                            await API.accounts.updateProfile(tokenData.id, {
                                stats: {
                                    cf_points: score
                                }
                            });
                            console.log(`Updated CF score for ${tokenData.id} due to profile update`);
                        })();
                    }
                    if ('leetcode' in body.profile.platforms && body.profile.platforms.leetcode && body.profile.platforms.leetcode != "") {
                        await Leetcode.database.syncUser(tokenData.id, body.profile.platforms.leetcode);
                        console.log(`Synced Leetcode for ${tokenData.id} due to profile update`);

                        // Re-calculate LC score
                        (async () => {
                            const score = await API.ml.getLCScore(body.profile.platforms.leetcode);
                            await API.accounts.updateProfile(tokenData.id, {
                                stats: {
                                    lc_points: score
                                }
                            });
                            console.log(`Updated LC score for ${tokenData.id} due to profile update`);
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