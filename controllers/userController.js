const User = require("../models/userModel");

const loginAuth = async (req, res) => {
    const { id, password } = req.body;
  
    try {
      // Find the user by ID
      const user = await User.findOne({ id });
  
      // Check if the user exists and the password matches
      if (user && user.password === password) {
        res.json({ success: true });
      } else {
        res.json({ success: false, message: 'Invalid credentials' });
      }
    } catch (error) {
      res.status(500).json({ success: false, message: 'Server error' });
    }
  }

module.exports={loginAuth}