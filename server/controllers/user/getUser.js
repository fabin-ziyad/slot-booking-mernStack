const User = require("../../models/User");
module.exports = async (req, res) => { 
    try {
        console.log(req.user)
        const { userId } = req.user;
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found",
            });
        } else {
            return res.status(200).json({
                success: true,
                message: "User founded successfully",
                data: user,
            });
        }
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "User not found",
            error: error.message,
        });
    }
}