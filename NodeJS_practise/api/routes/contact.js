const express = require('express')
const router = express.Router()

//Get
router.get('/', (req, res, next) => {
    res.status(200).json({
        message: "Hello, I am All contacts Get Route"
    })
})

//Post
router.post('/', (req, res, next) => {
    res.status(201).json({
        message: "Hello, I am Post Route"
    })
})

//id
router.get('/:id', (req, res, next) => {
    // console.log(req.url)
    const id = req.params.id
    res.json({
        id : req.url
    })
})

module.exports = router