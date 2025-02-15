/**
 * Utility functions library
*/

const axios = require('axios');
const config = require('./config.json');

module.exports = new class Utils {

    /**
     * Logger API
    */
    logger = {

        /**
         * Puts a message into the log.
         * @param {string} type - Type of message. Possible values are `info`, `warn`, `error`.
         * @param {string} message - Message content
        */
        put: async (type, message) => {
            let content;

            if(type === `info`) content = `**[info]** ${message}`;
            else if(type === `warn`) content = `**[warn]** ${message}`;
            else if(type === `error`) content = `**[error]** ${message}\n<@&${config.logger.discord.role}>`;

            const body = {
                content: content,
                username: config.name,
                // avatar_url: `https://eletra.tv/images/favicon-96x96.png`,
                allowed_mentions: {
                    parse: [],
                    roles: [config.logger.discord.role]
                }
            };

            // Send the log to Discord
            try {
                await axios.post(config.logger.discord.webhook_url, body);
            } catch(e) {
                console.error(`Logger error`, e.message);
            }
        },

        /**
         * Puts a info message into the log.
         * @param {string} message - Message content
        */
        log: async (message) => {
            return await this.logger.put('info', message);
        },
    
        /**
         * Puts an error message into the log.
         * @param {string} message - Message content
        */
        error: async (message) => {
            return await this.logger.put('error', message);
        },
    
        /**
         * Puts a warning message into the log.
         * @param {string} message - Message content
        */
        warn: async (message) => {
            return await this.logger.put('warn', message);
        }
    };

};