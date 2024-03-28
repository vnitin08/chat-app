import bcrypt from "bcryptjs";
import User from "../models/user.model.js";
import generateTokenAndSetCookie from "../utils/generateToken.js";

export const signup = async(req, res) => {
    try {
        const { fullName, username, password, confirmPassword } = req.body;
        
        if (password !== confirmPassword) {
            return res.status(400).json({ error: "Passwords do not match" });
        }

        const user = await User.findOne({username});

        if (user) {
            return res.status(400).json({ error: "Username is already taken" });
        }

        //Hash the password here
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const profilePic = `https://avatar.iran.liara.run/username?username=${fullName}`;
        console.log(profilePic);

        const newUser = new User({
            fullName,
            username,
            password: hashedPassword,
            profilePic: profilePic
        });

        if(newUser) {
            // Generate JWT token here
            generateTokenAndSetCookie(newUser._id, res);
            await newUser.save();

            res.status(201).json({
                _id: newUser._id,
                fullName: newUser.fullName,
                username: newUser.username,
                profilePic: newUser.profilePic
            });
        } else {
            res.status(400).json({ error: "Invalid user data" });
        }

    } catch (error) {
        console.log("Error in signup controller", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
};
 
export const login = async(req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({username});
        const validPassword = await bcrypt.compare(password, user.password || "");

        if (user && validPassword) {
            generateTokenAndSetCookie(user._id, res);

            res.status(200).json({
                _id: user._id,
                fullName: user.fullName,
                username: user.username,
                profilePic: user.profilePic
            });
        } else {
            res.status(400).json({ error: "Invalid username or password" });
        }
    }
    catch (error) {
        console.log("Error in login controller", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

export const logout = (req, res) => {
    try{
        res.cookie("jwt","",{maxAge: 0});
        res.status(200).json({ message: "Logged out successfully" });
    } catch (error) {
        console.log("Error in logout controller", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
}