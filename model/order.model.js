import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Types.ObjectId,
        ref: "User",
        requird: true
    },
    fullname: {
        type: String,
        required: true,
        trim: true
    },
    address: {
        type: String,
        required: true,
        trim: true
    },
    phone: {
        type: String,
        required: true,
        trim: true
    },
    city: {
        type: String,
        required: true,
        trim: true
    },
    zipCode: {
        type: String,
        required: true,
        trim: true
    },
    orderItems: {
        type: Array,
        required: true
    },
    total: {
        type: Number,
        required: true
    },
    deliveryFee: {
        type: Number,
        required: true
    }
});

const Order = mongoose.model("Order", orderSchema);
export default Order;