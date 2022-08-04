const Instructor = require('../models/instructorModel')
const User=require('../models/userModels')

const asyncHandler= require('express-async-handler')

const getInstructors = asyncHandler(async (req, res) => {
    const instructor = await Instructor.find({user:req.user.id})

    res.status(200).json(instructor)
})
const getOneInstructors = asyncHandler(async (req, res) => {
    const instructor = await Instructor.findById(req.params.id)

    if (!instructor) {
        res.status(400)
        throw new Error("instructor not found ")
    }

    res.status(200).json(instructor)
})
const createInstructors = asyncHandler(async (req, res) => {
    if (!req.body.text) {
        res.status(400)
        throw new Error('please add the text field')
    }
    let data=req.body;
    const instructor = await Instructor.create(data)

    res.status(400).json(instructor)
})

const updateInstructors = asyncHandler(async (req, res) => {
    const instructor = await Instructor.findById(req.params.id)

    if (!instructor) {
        res.status(400)
        throw new Error("instructor not found ")
    }
    const user=await User.findById( req.user.id)
    
    if(!user){
        res.status(401)
        throw new Error ('Error not Found')
    }

    //the logged in user matches the instructor user
    if(instructor.user.toString()!==user.id){
        res.status(401)
        throw new Error('User Not authorized')
    }

    const updated = await Instructor.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.status(200).json(updated)
})
const deleteInstructors = asyncHandler(async (req, res) => {
    const instructor = await Instructor.findById(req.params.id)

    if (!instructor) {
        res.status(400)
        throw new Error("instructor not found ")
    }
    if(!user){
        res.status(401)
        throw new Error ('Error not Found')
    }

    //the logged in user matches the instructor user
    if(instructor.user.toString()!==user.id){
        res.status(401)
        throw new Error('User Not authorized')
    }
     
    instructor.remove();
    res.status(200).json({ id: req.params.id })
})
module.exports = {
    getInstructors,
    getOneInstructors,
    createInstructors,
    updateInstructors,
    deleteInstructors
}