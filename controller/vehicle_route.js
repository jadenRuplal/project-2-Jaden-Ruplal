const express = require('express')
const router = express.Router()
const Vehicle = require('../models/vehicles')
const VehicleSeed = require('../models/vehicleSeed')

router.delete('/mine/:id', (req, res) => {
    const vehicleId = req.params.id
    console.log('this is vehicle ID', vehicleId)
    Vehicle.findByIdAndRemove(vehicleId)
        .then(Vehicle => {
            res.redirect('/vehicles/mine')
        })
        .catch(err => {
            res.json(err)
        })
})

router.get('/mine/:id/edit', (req, res) => {
    const vehicleId = req.params.id

    Vehicle.findById(vehicleId)
        .then(vehicles => {
            res.render('vehicles/edit', { vehicles })
        })
        .catch(err => {
            res.json(err)
        })
})

router.put('/mine/:id', (req, res) => {
    const vehicleId = req.params.id

    Vehicle.findByIdAndUpdate(vehicleId, req.body, { new: true })
        .then(vehicle => {
            res.redirect(`/vehicles/mine`)
        })
        .catch(err => {
            res.json(err)
        })
})




router.get('/new', (req, res) => {
    const username = req.session.username
    const loggedIn = req.session.loggedIn
    res.render('vehicles/new', { username, loggedIn })
})


router.post('/', (req, res) => {

    req.body.owner = req.session.userId

    console.log(req.body)
    Vehicle.create(req.body)
        .then(vehicle => {
            console.log(vehicle)
            res.redirect('/vehicles/mine')
        })
        .catch(err => {
            res.json(err)
        })
})


// router.get('/mine/:id', (req, res) => {
//     const vehicleId = req.params.id

//     Vehicle.findById(vehicleId)
//         .then(vehicles => {
//             console.log('vehicles', vehicles)
//             res.render('vehicles/showvehicle', { vehicles })
//         })
//         .catch(err => {
//             res.json(err)
//         })
// })

router.get('/mine', (req, res) => {
    console.log('Working')
    Vehicle.find({ owner: req.session.userId })
        .then(vehicles => {
            // console.log('vehicles', vehicles)
            res.render('vehicles/show', { vehicles })
        })
        .catch(error => {
            console.log(error)
            res.json({ error })
        })
})

router.get('/brand', (req, res) => {
    console.log('Working')
    VehicleSeed.find({})
        .then(vehicleSeed => {
            console.log('data', vehicleSeed)
            res.render('vehicles/brand', {vehicleSeed})
        })
        .catch(error => {
            res.json({ error })
        })
})



router.get('/mine/:id', (req, res) => {
    const vehicleId = req.params.id
    console.log(vehicleId)

    Vehicle.findById(vehicleId)
        .populate('comments.author')
        .then(vehicles => {
            const userId = req.session.userId
            console.log('this is user IDDDDDDDDD', userId)
            const username = req.session.username
            res.render('vehicles/showvehicle', { vehicles, userId, username })
            // console.log(vehicle)
        })
        .catch(err => {
            res.json(err)
        })
})

module.exports = router