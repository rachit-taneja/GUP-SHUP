import User from "../models/user.model.js";
import { asynchandler } from "../utilities/asynchandler.js";
import Errorhandler from "../utilities/errorhandler.js";
import bcrypt, { hash } from "bcryptjs";
import jwt from "jsonwebtoken";

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
  const hashedpassword= await bcrypt.hash(password,10);
  
  const avatartype = gender==="male" ? "male" : "female";
  const avatar = `https://avatar.iran.liara.run/public/${avatartype}?username=${username}`;

  const newUser = await User.create({
    name,
    username,
    email,
    password: hashedpassword,
    gender,
    avatar
  });
  const tokendata={
    id:newUser._id,
    username:newUser.username,
  }
  const token=jwt.sign(tokendata,process.env.JWT_SECRET,{expiresIn:process.env.JWT_EXPIRE});
  return res.status(201).
  cookie("token", token, {
    httpOnly: true,
    expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days
    secure: process.env.NODE_ENV === "production", // Set secure flag in production
    sameSite:'None',
  })
  .json({
    success: true,
    message: "User registered successfully",
    newUser,
  });
});

export const login = asynchandler(async (req, res, next) => {

  const { username,  password } = req.body;

  // console.log(name, username, email, password, gender);

  if (!username || !password) {
    return next(new Errorhandler("Please provide all required fields", 400));
  }

  const user = await User.findOne({ username });

  if (!user) {
    return next(new Errorhandler("Invalid credentials", 401));
  }
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return next(new Errorhandler("Invalid credentials", 401));
  }
  const tokendata={
    id:user._id,
    username:user.username,
  }
  const token=jwt.sign(tokendata,process.env.JWT_SECRET,{expiresIn:process.env.JWT_EXPIRE});

  return res.status(201).cookie("token", token, {
    httpOnly: true,
    expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days
    secure: process.env.NODE_ENV === "production", // Set secure flag in production
    sameSite:'None',
  }).json({
    success: true,
    message: "User signed in successfully",
    user,
  });
});

export const getProfile = asynchandler(async (req, res, next) => {
  const userId = req.user.id;

  const profile = await User.findById(userId)

  res.status(200).json({
    success: true,
    profile,
  });
});


export const logout = asynchandler(async (req, res, next) => {
  
  res.status(200)
  .cookie("token", "", {
    httpOnly: true,
    expires: new Date(0), // Expire the cookie immediately
  })
  .json({
    success: true,
    message: "User logged out successfully",
  });
});