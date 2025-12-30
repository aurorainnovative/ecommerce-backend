import Order from "../model/order.model.js";
import User from "../model/user.model.js";

export const createOrder = async (req, res) => {
    try {
        const data = req.body;
        if(!data) return res.status(400).json({message: "All Order data Required!", success: false});

        const order = new Order(data);
        await order.save();

        res.status(201).json({success: true, message: "Your order placed!", order});
    } catch (error) {
        console.log("Order creation error : ", error);
        res.status(500).json({success: false, message: "Internal Server Error. Please try again!"})
    }
}

export const getOrders = async (req, res) => {
    try {
        const orders = await Order.find();
        res.status(200).json({success: true, message: "Orders Fetched!", data: orders});
    } catch (error) {
        console.log("Order Getting Error : ", error);
        res.status(500).json({success: false, message: "Internal Server Error.Please try again!"});
    }
}

export const myOrders = async (req, res) => {
    try {
        const {userId} = req.params;
        if((!userId)) return res.status(400).json({success: false, message: "User ID is Required!"});

        const userExist = await User.findById(userId);

        if(!userExist) return res.status(404).json({success: false, message: "User Not Found!"});

        const orders = await Order.find({userId});

        res.status(200).json({success: true, message: "My Order Fetched!", data: orders});
    } catch (error) {
        console.log("My orders getting Error : ", error);
        res.status(500).json({success: false, message: "Internal Server Error.Please try again!"});
    }
}