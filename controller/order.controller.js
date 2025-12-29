import Order from "../model/order.model.js";

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