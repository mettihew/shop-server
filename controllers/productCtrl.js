import Product from "../models/productModel.js"
import Cart from "../models/cartModel.js"
import asyncHandler from "express-async-handler"

export const createProduct = asyncHandler(async(req, res) => {
    const {title, category, price, description, sustainable, brand, seller, color, size} = req.body
    const product = ({title, category, price, description, sustainable, brand, seller, color, size, image: req.file.path})
    try {
        const add = await Product.create(product)
        res.status(200).send(add)
    } catch (error) {
        throw new Error(error)
    }
})

export const getProducts = asyncHandler(async(req, res) => {
    try {
        const get = await Product.find()
        res.json(get)
    } catch (error) {
        throw new Error(error)
    }
})

export const getAproduct = asyncHandler(async(req, res) => {
    try {
        const get = await Product.find(req.body)
        res.send(get)
    } catch (error) {
        throw new Error(error)
    }
})

export const updateProduct = asyncHandler(async(req, res) => {
    try {
        const update = await Product.findByIdAndUpdate({price: 4000,  _id: "65283036026f33ecd3bdc791"})
        res.send(update)
    } catch (error) {
        throw new Error(error)
    }
})

export const addToCart = asyncHandler(async(req, res) => {
    try {
        const addProduct = await Cart.create(req.body)
        res.json(addProduct)
    } catch (error) {
        throw new Error(error)
    }
})

export const getCart = asyncHandler(async(req, res) => {
    try {
        const get = await Cart.find()
        res.json(get)
    } catch (error) {
        throw new Error(error)
    }
})

export const deleteProduct = asyncHandler(async(req, res) => {
    console.log(req.body)
    try {
        const del = await Product.deleteMany()
        // const del = await Product.findByIdAndDelete(req.body)
        res.json(del)
    } catch (error) {
        throw new Error(error)
    }
})

