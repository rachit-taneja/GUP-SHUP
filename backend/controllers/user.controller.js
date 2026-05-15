import User from "../models/user.model.js";
export const register = (req, res , next) => {
    try {
        const { name,password } = req.body;
        console.log(name,password);
        
        res.send("User registered successfully" );
    } catch (error) {
    
    }  
};