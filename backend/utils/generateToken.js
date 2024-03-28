import jwt from 'jsonwebtoken';

const generateTokenAndSetCookie = (userId, res) => {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET,{
        expiresIn: "15d"
    })
    res.cookie("jwt",token, {
        sameSite: "strict", // The cookie is sent only to the same domain that generated it
        maxAge: 15 * 24 * 60 * 60 * 1000, // 15 days in ms
        httpOnly: true, // Prevents client side JS from reading the cookie
        secure: process.env.NODE_ENV !== "development", // cookie will only be set on https
    })
}

export default generateTokenAndSetCookie;