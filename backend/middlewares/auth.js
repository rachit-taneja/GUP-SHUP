import { asynchandler } from "../utilities/asynchandler.js";
import  Errorhandler from "../utilities/errorhandler.js";
import jwt from "jsonwebtoken";


export const isAuthenticated = asynchandler(async (req, res, next) => { 
    const token = req.cookies.token || req.headers["authorization"]?.replace("Bearer ", "");
    if (!token) {
        return next(new Errorhandler("You are not logged in", 401));
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
});