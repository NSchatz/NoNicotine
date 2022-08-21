const express = require('express')
const router = express.Router()
const { getTimes, setTime, updateTime, deleteTime } = require('../controllers/timeController')

router.route('/').get(getTimes).post(setTime)

router.route('/:id').put(updateTime).delete(deleteTime)

module.exports = router