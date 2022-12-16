const db = require('../data/db-config')

const getAll = () => {
    return db('locations');
}

const create = location =>{
      db('locations').insert(location)
}

const deleteById = id => {

    return db('locations').where('id', id).del()
};

module.exports = {
    getAll,
    create,
    deleteById
}