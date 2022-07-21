const mongoose = require('./connection')
const commentSchema = require('./comments')

const { Schema, model } = mongoose

const vehicleSchema = new Schema(
	{
		make: String,
        model: String,
		color: String,
        year: String,
        category: String,
		owner: {
			type: Schema.Types.ObjectId, 
			ref: 'User', 
		},
        comments: [commentSchema]
	},
	{
		timestamps: true,
	}
)


const Vehicle = model('Vehicle', vehicleSchema)

module.exports = Vehicle