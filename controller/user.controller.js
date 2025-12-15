import User from "../model/user.model.js";

export const createUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        if (!name || !email || !password) return res.status(400).json({ success: false, message: "All input fields are required!" });

        const isExist = await User.findOne({ email });
        if (isExist) return res.status(400).json({ success: false, message: "This email already used in another account!" });

        const newUser = new User({
            name, email, password
        });

        await newUser.save();

        res.status(201).json({ success: true, message: "User created successfully!", user: newUser })
    } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, message: "Something went wrong while creating user!" })
    }
}