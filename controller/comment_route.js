const express = require('express')
const router = express.Router()
const Vehicle = require('../models/vehicles')

router.post('/:vehicleId', (req, res) => {
    const vehicleId = req.params.vehicleId
    req.body.author = req.body.userId
    console.log(req.body.userId, vehicleId)
    Vehicle.findById(vehicleId)
        .then(vehicle => {
            console.log('sent', vehicle)
            vehicle.comments.push(req.body)
            return vehicle.save()
        })
        .then(vehicle => {
            console.log('hi')
            res.redirect(`/vehicles/mine/${vehicle._id}`)
        })
        .catch(err => {
            res.json(err)
            console.log('errors', err)
        })
})

module.exports = router