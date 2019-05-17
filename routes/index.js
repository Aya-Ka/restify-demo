/**
 * Module Dependencies
 */
const errors = require('restify-errors');

module.exports = function(server) {
    /** 
     * HealthCheck 
     * */  
    server.get('/health', (req, res, next) => {
        res.send('I am still alive');
        next();
    });
}