const express = require('express')
const router = express.Router()
const Vehicle = require('../models/vehicles')


router.delete('/:id', (req, res) => {
    const vehicleId = req.params.id

    Vehicle.findByIdAndRemove(vehicleId)
        .then(Vehicle => {
            res.redirect('/vehicles')
        })
        .catch(err => {
            res.json(err)
        })
})

router.get('/:id/edit', (req, res) => {
    const vehicleId = req.params.id

    Vehicle.findById(vehicleId)
        .then(fruit => {
            res.render('vehicles/edit', { vehicle })
        })
        .catch(err => {
            res.json(err)
        })
})

// router.put('/:id', (req, res) => {
//     const vehicleId = req.params.id

//     req.body.readyToEat = req.body.readyToEat === 'on' ? true : false

//     Fruit.findByIdAndUpdate(fruitId, req.body, { new: true })
//         .then(fruit => {
//             res.redirect(`/fruits/${fruit._id}`)
//         })
//         .catch(err => {
//             res.json(err)
//         })
// })


router.get('vehicles/new', (req, res) => {
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
            res.redirect('/vehicles')
        })
        .catch(err => {
            res.json(err)
        })
})


router.get('/', (req, res) => {
    Vehicle.find({})
        .then(vehicles => {
            res.render('vehicles/index', { vehicles })
        })
        .catch(err => {
            res.json(err)
        })
})

router.get('/mine', (req, res) => {
    Fruit.find({ owner: req.session.userId })
        .then(vehicles => {
            res.render('vehicles/index', { vehicles })
        })
        .catch(error => {
            console.log(error)
            res.json({ error })
        })
})

/


router.get('/:id', (req, res) => {
    const vehicleId = req.params.id

    Vehicle.findById(vehicleId)
        .populate('comments.author')
        .then(fruit => {
            const userId = req.session.userId
            const username = req.session.username
            res.render('vehicles/show', { vehicle, userId, username })
        })
        .catch(err => {
            res.json(err)
        })
})

module.exports = router