import User from "../models/user.model.js";

export const getUserForSiderbar = async(req, res) => {
    try {

        const loggedInUserId = req.user._id

        const filteredUsers = await User.find({ _id: { $ne: loggedInUserId } }).select("-password");

        res.status(200).json(filteredUsers);

    } catch (error) {
        console.error("Error in getUserForSiderbar controller: ", error.message);
        res.send(500).json({ error: "Internal server error" });
    }
};