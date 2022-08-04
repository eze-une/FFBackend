const express = require('express')
const router = express.Router()
const {protect}=require('../middleware/authMiddleware')
const { getInstructors,getOneInstructors,createInstructors,updateInstructors,deleteInstructors } = require('../controllers/instructorController')

router.route('/').get(protect,getInstructors).post(protect,createInstructors)
router.route('/:id').get(protect,getOneInstructors).put(protect,updateInstructors).delete(protect,deleteInstructors)

module.exports = router 