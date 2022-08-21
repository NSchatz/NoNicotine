const  asyncHandler = require('express-async-handler')
const Time = require('../models/timeModel')
const User = require('../models/userModel')

// @desc Get times
// @route GET /api/times
// @access PRIVATE
const getTimes = asyncHandler(async (req, res) => {
    const Times = await Time.find({ user: req.user.id})
    res.status(200).json(Times)
})

// @desc Set time
// @route POST /api/times
// @access PRIVATE
const setTime = asyncHandler(async (req, res) => {
    if(!req.body.time){
        res.status(400)
        throw new Error(' Please add a date field')
    }
    
    const time = await Time.create({
        time: req.body.time,
        user: req.user.id
    }) 
    res.status(200).json(time)
})

// @desc Update Times
// @route PUT /api/Times
// @access PRIVATE
const updateTime = asyncHandler(async (req, res) => {

    const time = await Time.findById(req.params.id)

    if(!time){
        res.status(400)
        throw new Error('Nothing with that ID')
    }

    const User = await User.findById(req.user.id)

    if(!User){
        res.status(401)
        throw new Error('User not found')
    }

    if(time.user.toString() !== user.id) {
        res.status(401)
        throw new Error('User not authorized')
    }

    const updatedTime = await Time.findByIdAndUpdate(req.params.id, req.body, {new:true})

    res.status(200).json(updatedTime)
})

// @desc Delete Times
// @route DELETE /api/Times
// @access PRIVATE
const deleteTime = asyncHandler(async (req, res) => {
    const time = await Time.findById(req.params.id)

    if(!time){
        res.status(400)
        throw new Error('Nothing with that ID')
    }

    const User = await User.findById(req.user.id)

    if(!User){
        res.status(401)
        throw new Error('User not found')
    }

    if(time.user.toString() !== user.id) {
        res.status(401)
        throw new Error('User not authorized')
    }

    await time.remove()
    res.status(200).json(req.params.id)
})

module.exports = {
    getTimes,
    setTime,
    updateTime,
    deleteTime
}