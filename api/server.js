const express = require('express')
const locationsRouter = require('./locations/locations-router')
const cors = require('cors')


const server = express();

server.use(cors())
server.use('/locations', locationsRouter)

server.use('*', (req, res) =>{
    res.status(404).json({
        message: 'not found'
    })
})

module.exports = server