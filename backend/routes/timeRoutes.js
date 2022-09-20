const express = require('express')
const router = express.Router()
const { getTimes, setTime, updateTime, deleteTime } = require('../controllers/timeController')
const { protect } = require('../middleware/authMiddleware')

router.route('/').get(protect, getTimes).post(protect, setTime)

router.route('/:id').put(protect, updateTime).delete(protect,deleteTime)

module.exports = router;