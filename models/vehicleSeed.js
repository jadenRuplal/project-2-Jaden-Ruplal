const mongoose = require('./connection')
// const commentSchema = require('./comments')

const { Schema, model } = mongoose

const vehicleSeedSchema = new Schema(
	{
		objectId: String,
        Year: Number,
        Make: String,
		Model: String,
        Category: String,
	},
	{
		timestamps: true,
	}
)

const VehicleSeed = model('vehicleSeed', vehicleSeedSchema)

module.exports = VehicleSeed