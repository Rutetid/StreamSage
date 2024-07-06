const { JWT_SECRET } = require("./config");
const jwt = require("jsonwebtoken");

const authMiddleware =  (req,res,next )=>{
    const authHeader = req.headers.Authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(403).json({});
    }
    const token = authHeader.split(" ")[1];
    const decoded = jwt.verify({token},JWT_SECRET);
    req.userId = decoded.userId;
    next();
}

module.exports={
    authMiddleware,
}
