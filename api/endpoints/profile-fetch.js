/**
 * Profile Fetch API endpoint
*/

const API = require('../api');

module.exports = {

    type: 'get',
    route: '/profile/fetch',
    auth: true,

    handle: async (c) => {
        const tokenData = c.get('auth_user');

        let data;
        
        try {
            data = await API.accounts.fetchProfile(tokenData.id);
        } catch(e) {
            c.status(e.status);
            return c.json({
                message: e.message,
                code: e.code
            });
        }

        return c.json(data);
    }

};