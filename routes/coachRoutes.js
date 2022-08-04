const express = require('express')
const router = express.Router()
const {protect}=require('../middleware/authMiddleware')
const { getCoaches,getOneCoaches,createCoaches,updateCoaches,deleteCoaches } = require('../controllers/coachController')

router.route('/').get(protect,getCoaches).post(protect,createCoaches)
router.route('/:id').get(protect,getOneCoaches).put(protect,updateCoaches).delete(protect,deleteCoaches)

module.exports = router 