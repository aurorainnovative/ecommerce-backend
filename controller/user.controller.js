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

export const loginUser = async (req, res) => {
    try {
        const {email, password} = req.body;
        if(!email || !password) return  res.status(400).json({ success: false, message: "Email and password are required!" });

        const user = await User.findOne({email});
        if(!user) return  res.status(404).json({ success: false, message: "User not found!" });

        const matchPassword = await user.comparePassword(password);
        if(!matchPassword) return  res.status(400).json({ success: false, message: "Incorrect password!" });

        return  res.status(200).json({ success: true, message: "User login successfully!", user });
    } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, message: "Something went wrong while login user!" })
    }
}