
const mongoose = require('mongoose')

const timeSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    time: {
        type: Date,
        required: [true, 'Please select a date']
    },
}, {
    timestamps: true,
})

module.exports = mongoose.model('Time',timeSchema)