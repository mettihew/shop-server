import mongoose from "mongoose"

export const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    description: {
        type: String,
        requred: true,
    },
    color: {
        type: Array,
        required: true
    },
    size: {
        type: Array,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    sustainable: {
        type: Boolean,
        default: false
    },
    brand: {
        type: String,
        required: true
    }, 
    seller: {
        type: Array,
        required: true
    },
    star: {
        type: Number,
        required: false
    }
}, {timestamps: true})

export default mongoose.model("Product", productSchema)