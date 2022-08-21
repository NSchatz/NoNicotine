const  asyncHandler = require('express-async-handler')
const Time = require('../models/timeModel')
// @desc Get times
// @route GET /api/times
// @access PRIVATE
const getTimes = asyncHandler(async (req, res) => {
    const Times = await Time.find()
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
        time: req.body.time
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

    await time.remove()
    res.status(200).json(req.params.id)
})

module.exports = {
    getTimes,
    setTime,
    updateTime,
    deleteTime
}