/**
 * Profile Update API endpoint
*/

const API = require('../api');

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