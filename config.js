module.exports = {
    name: 'GPS Tracker API Server',
    env: process.env.NODE_ENV || 'development',
    port: process.env.PORT || 3000,
    base_url: process.env.BASE_URL || 'http://localhost:3000',
    version: process.env.version || '1.0.0'
}