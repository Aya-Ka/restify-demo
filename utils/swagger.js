const restifySwaggerJsdoc = require('restify-swagger-jsdoc');
const config = require('../config');

module.exports = function(server) {
    /**
     * Initialize the swagger JSDoc page
     */
    restifySwaggerJsdoc.createSwaggerPage({
        title: 'GPS Tracker API documentation',
        version: config.version,
        server: server,
        path: '/docs/swagger',
        description: 'My great GPS tracking app',
        host: `${config.host}:${config.port}`,
        schemes: ['http'],
        apis: [ `./routes/*.js` ],
        forceSecure: false
    });
}