const express = require('express')
const locationsRouter = require('./locations/locations-router')
const cors = require('cors')
const bp = require('body-parser')


const server = express();

server.use(cors())
server.use(bp.json())
server.use(bp.urlencoded({ extended: true }))
server.use('/locations', locationsRouter)

server.use('*', (req, res) =>{
    res.status(404).json({
        message: 'not found'
    })
})

module.exports = server