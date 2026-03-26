import User from "../models/user.model.js";
export const login = async (req, res , next) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        const isMatch = await user.comparePassword(password);
        if (!isMatch) {
            return res.status(401).json({ message: "Invalid credentials" });
        }
        res.send({ message: "User logged in successfully" });
    } catch (error) {
        next(error);
    }
};