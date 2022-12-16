const db = require('../data/db-config')


const getAll = () => {
    return db('locations');
}

async function create(location) {
    const result = await db('locations').insert(location)
    return result
}


const deleteById = id => {
    return db('locations').where('id', id).del()
};

module.exports = {
    getAll,
    create,
    deleteById
}