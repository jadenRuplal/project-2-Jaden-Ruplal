const express = require('express')
const router = express.Router()
const Vehicle = require('../models/vehicles')

router.post('/:vehicleId', (req, res) => {
    const vehicleId = req.params.vehicleId
    req.body.author = req.body.userId

    Vehicle.findById(vehicleId)
        .then(vehicle => {
            vehicle.comments.push(req.body)
            return vehicle.save()
        })
        .then(vehicle => {
            res.redirect(`/vehicles/${vehicle._id}`)
        })
        .catch(err => {
            res.json(err)
        })
})

module.exports = router