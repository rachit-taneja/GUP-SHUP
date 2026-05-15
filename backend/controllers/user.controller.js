import User from "../models/user.model.js";
import { asynchandler } from "../utilities/asynchandler.js";
import Errorhandler from "../utilities/errorhandler.js";

export const register = asynchandler(async (req, res, next) => {

  const { name, username, email, password, gender } = req.body;

  console.log(name, username, email, password, gender);

  if (!name || !username || !email || !password || !gender) {
    return next(new Errorhandler("Please provide all required fields", 400));
  }

  const user = await User.findOne({ email });

  if (user) {
    return next(new Errorhandler("User already exists", 400));
  }

const avatartype = gender==="male" ? "male" : "female";
  const avatar = `https://avatar.iran.liara.run/public/$(avatartype)?username=(username)`;

  const newUser = await User.create({
    name,
    username,
    email,
    password,
    avatar,
  });

  return res.status(201).json({
    success: true,
    message: "User registered successfully",
    newUser,
  });
});