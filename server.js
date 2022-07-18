require('dotenv').config()
const express = require('express')
const methodOverride = require('method-override')
const app = require('liquid-express-views')(express())
const userRoutes = require('./controller/user_route')

//middleware
app.use(methodOverride('_method'))
app.use(express.urlencoded({ extended: false }))
app.use(express.static('public'))
const session = require('express-session')
const MongoStore = require('connect-mongo')
const { application } = require('express')
app.use(
	session({
		secret: process.env.SECRET,
		store: MongoStore.create({
			mongoUrl: process.env.DATABASE_URI
		}),
		saveUninitialized: true,
		resave: false
	})
)

// app.get('/', (req, res) => {
//     res.redirect('/signin')
// })

// app.get('/signin', (req,res) => {
//     res.render('views/users/login.liquid')
// })

app.use('/', userRoutes)

app.get('/main', (req, res) => {
	res.render('index')
})

const PORT = process.env.PORT
app.listen(PORT, () => {
	console.log(`app is listening on port: ${PORT}`)
})