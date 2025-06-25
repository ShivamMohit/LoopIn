import jwt from 'jsonwebtoken';
import User from '../models/user.model.js';



export const isAuthenticated = async(req, res, next) => {
    const token = req.cookies.jwt;
    
    if (!token) {
        return res.status(401).json({ message: "Unauthorized access" });
    }
    
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findById(decoded.userId).select("-password"); 
        if (!user) {
            return res.status(401).json({ message: "Unauthorized access" });
        }
        req.user = user; 
        console.log("User authenticated:", user._id);
        next();
    } catch (error) {
        console.error("Token verification failed:", error.message);
        return res.status(403).json({ message: "Forbidden access" });
    }
    }