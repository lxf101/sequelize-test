const Sequelize = require('sequelize');

const conf = {
    host: 'localhost',
    dialect: 'mysql'
}

// production environment -> connection pool   
// process.env.NODE_ENV
// conf.pool = {
//     max: 5, // max connection number
//     min: 0, // min connection number
//     idle: 10 * 1000,    // If a connection is not used in 10s, it will be released.
// }


// create sequelize instance
const seq = new Sequelize('myblog_sequelize', 'root', '123456', conf);

// test connection
// seq.authenticate().then(() => {
//     console.log('connection success')
// }).catch(() => {
//     console.error('connection error')
// })

module.exports = seq

