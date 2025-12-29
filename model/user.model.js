import mongoose from "mongoose";
import bcryptjs from "bcryptjs";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    role: {
        type: String,
        required: true,
        enum: ["USER", "ADMIN"],
        default: "USER"
    }
});

userSchema.pre("save", async function () {
    if (!this.isModified('password')) return;

    this.password = await bcryptjs.hash(this.password, 10);
 
});

userSchema.methods.comparePassword = async function (enteredPassword) {
    return bcryptjs.compare(enteredPassword, this.password);
}

const User = mongoose.model("User", userSchema);

export default User;