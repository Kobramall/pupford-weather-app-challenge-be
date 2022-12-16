const db = require('../data/db-config')

const getAll = () => {
    return db('locations')
}

module.exports = {
    getAll
}