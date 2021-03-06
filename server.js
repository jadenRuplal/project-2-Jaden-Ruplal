require('dotenv').config()
const express = require('express')
const methodOverride = require('method-override')
const app = require('liquid-express-views')(express())
const userRoutes = require('./controller/user_route')
const vehicleRoutes = require('./controller/vehicle_route')
const commentRoutes = require('./controller/comment_route')

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
			mongoUrl: process.env.MONGODB_URI
		}),
		saveUninitialized: true,
		resave: false
	})
)


app.use('/', userRoutes)
app.use('/vehicles', vehicleRoutes)
app.use('/comments', commentRoutes)



app.get('/', (req, res) => {
	res.redirect('/signin')
})

const PORT = process.env.PORT
app.listen(process.env.PORT || 3000, () => {
	console.log(`app is listening on port: ${PORT}`)
})