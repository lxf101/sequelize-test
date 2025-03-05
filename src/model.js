const Sequelize = require('sequelize');
const seq = require('./db');

// User model
const User = seq.define(
    'user',
    {
        username: {
            type: Sequelize.STRING,
            allowNull: false
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false
        },
        realname: {
            type: Sequelize.STRING
        }
    }
)

// Blog model
const Blog = seq.define(
    'blog',
    {
        title: {
            type: Sequelize.STRING,
            allowNull: false
        },
        content: {
            type: Sequelize.TEXT,
            allowNull: false
        },
        author: {
            type: Sequelize.STRING,
            allowNull: false
        }
    }
)

module.exports = {
    User,
    Blog
}