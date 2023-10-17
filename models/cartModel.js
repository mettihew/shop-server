import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    size: {
        type: String,
        required: true
    }, 
    color: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: Array,
        required: true
    },
})

export default  mongoose.model("Cart", cartSchema)