const router = require("express").Router();
const Cards = require("../models/Card")

router.post('/dating/cards', (req, res) => {
    const dbCard = req.body
    Cards.create(dbCard, (err, data) => {
        if(err) {
            res.status(500).send(err)
        }else {
            res.status(201).send(data)
        }
    })
})

router.get('/dating/cards', (req, res) => {
    Cards.find((err, data) => {
        if(err){
            res.status(500).send(err)
        }else {
            res.status(200).send(data)
        }
    })
})

module.exports = router