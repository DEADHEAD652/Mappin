const router = require("express").Router();
const User = require("../models/user");
const bcrypt = require("bcrypt");
//register

router.post("/register", async (req, res) => {
  try {
    //generate new password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    //create new user
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });
    //send user
    const user = await newUser.save();
    res.status(200).json(user._id);
  } catch (e) {
    res.status(500).send(e);
  }
});

//login
router.get("/login", async (req, res) => {
  try {
    //find user
    const user = await User.findOne({ username: req.body.username });
    !user && res.status(400).send("Wrong user name");
    //validate password
    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    !validPassword && res.status(400).send("Wrong password");
    //send user
    res.status(200).json({ _id: user._id, username: username });
  } catch (e) {
    res.status(500).send(e);
  }
});
module.exports = router;
