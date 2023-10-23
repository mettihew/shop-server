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

// export const addToCart = asyncHandler(async(req, res) => {
//     // const product = { userId: id ,title, price, size, color}
//     try {
//         const addProduct = await Cart.create(req.body)
//         res.json(addProduct)
//     } catch (error) {
//         throw new Error(error)
//     }
// })

export const addToCart = asyncHandler(async (req, res) => {
    const { productId, color, size, price ,title, image} = req.body;
    const {user_id} = req.user;
    try {
      let newCart = await new Cart({
        userId: user_id,
        productId,
        color,
        price,
        size,
        title,
        image
      }).save();
      res.json(newCart);
    } catch (error) {
      throw new Error(error);
    }
  });

// export const getCart = asyncHandler(async(req, res) => {
//     const {userId} = req.body
//     console.log(userId)
//     try {
//         const get = await Cart.find({userId})
//         res.json(get)
//     } catch (error) {
//         throw new Error(error)
//     }
// })

export const getCart = asyncHandler(async (req, res) => {
  const {_id} = req.body;
    try {
      const cart = await Cart.find({userId: _id})
        .populate("productId")
        .populate("color");
      res.json(cart);
    } catch (error) {
      throw new Error(error);
    }
  });

  export const deleteFromCart = asyncHandler(async (req, res) => {
    console.log('--------->',req.body,'<-----------');
      try {
        const del = await Cart.findByIdAndDelete(req.body)
        res.json(del);
      } catch (error) {
        throw new Error(error);
      }
    });

