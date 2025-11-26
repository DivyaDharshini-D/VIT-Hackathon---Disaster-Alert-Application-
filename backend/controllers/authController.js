import User from "../models/User.js";
import bcrypt from "bcrypt";
import { generateToken } from "../utils/generateToken.js";

export const register = async (req, res) => {
  const { name, email, password, age } = req.body;

  const already = await User.findOne({ email });
  if (already) return res.status(400).json({ message: "User already exists" });

  const hashed = await bcrypt.hash(password, 10);

  const user = await User.create({
    name,
    email,
    password: hashed,
    age
  });

  res.json({
    token: generateToken(user._id),
    user
  });
};
