const mongoose = require('./connection')


const { Schema, model } = mongoose

const vehicleSchema = new Schema(
	{
		company: String,
        model: String,
		color: String,
        year: Number,
		owner: {
			type: Schema.Types.ObjectId, 
			ref: 'User', 
		},
	},
	{
		timestamps: true,
	}
)


const Vehicle = model('vehicle', vehicleSchema)

module.exports = Vehicle