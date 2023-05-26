require('dotenv')
    .config();

module.exports = {
    PORT: process.env.PORT,
    HOST: process.env.HOST,
    STATS_PATH: process.env.STATS_PATH
};