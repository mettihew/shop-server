import mongoose from "mongoose";

export const orderSchema = new mongoose.Schema({
    order: {
        type: Array,
        default: undefined,
        required: true
    }
},{timestamps: true})

export default mongoose.model("Order", orderSchema)