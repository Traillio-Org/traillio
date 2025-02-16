/**
 * API Server
*/

const Hono = require('hono').Hono;
const serve = require('@hono/node-server').serve;
const cors = require('hono/cors').cors;
const config = require('./config.json');
const apiRoutes = require('./Routes');
const database = require('./db');
const leetcodeAPI = require('alfa-leetcode-api').default;
const API = require('./api');

const leetcode = require('./lib/platforms/leetcode');
const codeforces = require('./lib/platforms/codeforces');

class APIServer {
    api = new Hono();

    async init() {
        // Use CORS
        this.api.use('*', cors({
            origin: [...config.api.corsOrigins],
            allowMethods: ['POST', 'GET']
        }));

        // Start Leetcode API server
        leetcodeAPI.listen(config.api.leetcodeApiPort, async () => {
            console.log(`Leetcode API server running on Port ${config.api.leetcodeApiPort}`);

            // console.log(await codeforces.database.syncUser('users:01JK82TPSF01BA4YMSZ3MMFVJQ', 'sarafarajnasardi'));
            // console.log(await leetcode.database.syncUser('users:01JK82TPSF01BA4YMSZ3MMFVJQ', 'theseyan'));
        });

        // Setup routes
        apiRoutes.setup(this.api);

        // Connect to database
        await database.init();

        // console.log(await API.ml.getStressPrediction("users:01JM62WEH1E5A5FK48S9ZZZ9BH"));
        // console.log(await API.ml.getLCScore("Sarafaraj"));

        // Start the API server
        serve({
            fetch: this.api.fetch,
            port: config.api.port
        });
        console.log(`API server running on Port ${config.api.port}`);
    }
};

// If script is run directly, start the server
// else export it.
if(require.main === module) {
    (new APIServer()).init();
}else {
    module.exports = new APIServer();
}