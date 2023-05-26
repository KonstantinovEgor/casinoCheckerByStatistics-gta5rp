const chalk = require('chalk');
const app = require('express')();

const config = require('../config/');

app.get('/', async (req, res, next) => {
    res.json('Work');
});

const start = async () => {
    try {
        app.listen(config.PORT, async () => {
            console.log(`\nServer started on - ` + chalk.green(`${config.HOST}:${config.PORT}`));
            const Checker = require('./Checker');
            const checker = new Checker();
            console.log('\n')
            console.log(await checker.getFavoritesNumsByNum('0'));
        }); 
    } catch (error) {
        console.log(chalk.red(`\nFail to start the server`));
    }
};

start()
    .then();