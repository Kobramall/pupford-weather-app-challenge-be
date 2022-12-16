const router = require('express').Router()
const Location = require('./locations-model')

router.get('/', async (req, res, next) => {

    try{
        const data = await Location.getAll()
        res.json(data)
    } catch(err){
        next(err)
    }
})

router.use((err, req, res, next) =>{
    res.status(err.status || 500).json({
        message: err.message,
        stack: err.stack
    })
})

module.exports = router;