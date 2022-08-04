const Coach = require('../models/coachModel')
const User=require('../models/userModels')

const asyncHandler = require('express-async-handler')

const getCoaches = asyncHandler(async (req, res) => {
    const coach = await Coach.find({user:req.user.id})

    res.status(200).json(coach)
})
const getOneCoaches = asyncHandler(async (req, res) => {
    const coach = await Coach.findById(req.params.id)

    if (!coach) {
        res.status(400)
        throw new Error("Coach not found ")
    }

    res.status(200).json(coach)
})
const createCoaches = asyncHandler(async (req, res) => {
    if (!req.body.text) {
        res.status(400)
        throw new Error('please add the text field')
    }
    let data=req.body;
    const coach = await Coach.create(data)

    res.status(400).json(coach)
})

const updateCoaches = asyncHandler(async (req, res) => {
    const coach = await Coach.findById(req.params.id)

    if (!coach) {
        res.status(400)
        throw new Error("Coach not found ")
    }
    const user=await User.findById( req.user.id)
    
    if(!user){
        res.status(401)
        throw new Error ('Error not Found')
    }

    //the logged in user matches the coach user
    if(coach.user.toString()!==user.id){
        res.status(401)
        throw new Error('User Not authorized')
    }

    const updated = await Coach.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.status(200).json(updated)
})
const deleteCoaches = asyncHandler(async (req, res) => {
    const coach = await Coach.findById(req.params.id)

    if (!coach) {
        res.status(400)
        throw new Error("Coach not found ")
    }
    if(!user){
        res.status(401)
        throw new Error ('Error not Found')
    }

    //the logged in user matches the coach user
    if(coach.user.toString()!==user.id){
        res.status(401)
        throw new Error('User Not authorized')
    }
     
    coach.remove();
    res.status(200).json({ id: req.params.id })
})
module.exports = {
    getCoaches,
    getOneCoaches,
    createCoaches,
    updateCoaches,
    deleteCoaches
}