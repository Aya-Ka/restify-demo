/**
 * Module Dependencies
 */
const errors = require('restify-errors');

module.exports = function(server) {
    /**
     * @swagger
     * /health:
     *   get:
     *     description: Run the health checking of API server.
     *     produces:
     *       - application/json
     *     responses:
     *       200:
     *         description: health check succeed
     */
    server.get('/health', (req, res, next) => {
        res.send({'status':'I am still alive'});
        next();
    });
}