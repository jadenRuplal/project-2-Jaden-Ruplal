require('dotenv').config()
const express = require('express')
const methodOverride = require('method-override')
const app = require('liquid-express-views')(express())
const userRoutes = require('./controls/user_route')

//middleware
app.use(methodOverride('_method'))
app.use(express.urlencoded({ extended: false }))
app.use(express.static('public'))
// const session = require('express-session')
// const MongoStore = require('connect-mongo')
// const { application } = require('express')

app.get('/', (req, res) => {
    res.redirect('/signin')
})

app.use('/signin', userRoutes)


app.listen(3004, () => {
	console.log(`app is listening on port: 3004`)
})