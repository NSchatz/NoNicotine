
const mongoose = require('mongoose')

const timeSchema = mongoose.Schema({
    time: {
        type: Date,
        required: [true, 'Please select a date']
    },
}, {
    timestamps: true,
})

module.exports = mongoose.model('Time',timeSchema)