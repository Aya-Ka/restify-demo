/**
 * Module Dependencies
 */
const config = require('./config');
const restify = require('restify');
const restifyPlugsins = require('restify-plugins');


/**
 * Initialize Server
 */


const server = restify.createServer({
    name: config.name,
    version: config.version,
});

/**
 * Middleware
 */
server.use(restifyPlugsins.jsonBodyParser({mapParams: true}));
server.use(restifyPlugsins.acceptParser(server.acceptable));
server.use(restifyPlugsins.queryParser({ mapParams: true}));

/**
 * Start server
 */
server.listen(config.port, () => {
    require('./routes')(server);
    console.log(`Server is listening on port ${config.port}`)
});