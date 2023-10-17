import User from "../models/userModel.js"
import asyncHandler from "express-async-handler"
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"

export const createAccount = asyncHandler(async(req, res) => {
    const {name, email, password} = req.body
    try {
        const userAlreadyExist = await User.findOne({email})
        if(userAlreadyExist){
            return res.status(409).send("User alredy exist!")
        }
        const passwordHashed = await bcrypt.hash(password, 12)
        const user = {name, email, password: passwordHashed}
        const token = jwt.sign({user_id:user._id,email}, 'MettihewToken')
        const createUser = await User.create(user)
        user.token = token
        res.json(createUser)        

    } catch (error) {
        throw new Error(error)
    }
})

export const login = asyncHandler(async(req, res) => {
    console.log(req.body)
    const {name, email, password} = req.body
    try {
        const theUser = await User.findOne({email})
        if(!theUser) return res.status(404).send("User not found")
        const thePassword = await bcrypt.compare(password, theUser.password) 
        if(!thePassword) return res.status(401).send("Username or password is wrong")
        if(theUser && thePassword){
            const token = jwt.sign({user_id: theUser._id, email, name}, 'MettihewToken', {expiresIn:'2d'})
            theUser.token = token
            res.json(theUser)        
        }
    } catch (error) {
        throw new Error(error)
    }
})

export const getUsers = asyncHandler(async(req, res) => {
    try {
        const getUsers = await User.find()
        res.json(getUsers)        
    } catch (error) {
        throw new Error(error)
    }
})


export const deleteAccount = asyncHandler(async(req, res) => {
    const {email} = req.body
    try {
        const deleteUser = await User.findOneAndDelete({email})
        res.json(deleteUser)        
    } catch (error) {
        throw new Error(error)
    }
})
