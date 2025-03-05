const seq = require('./db')

require('./model')

seq.sync({force: true}).then(() => {
    process.exit()
})


