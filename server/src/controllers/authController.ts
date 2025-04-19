import { RequestHandler } from "express";
import {prisma} from "../../prisma/client";

export const login: RequestHandler = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) { // if password or email feild doesnt reacher server it throws error message
    res.status(400).json({ message: "Email and password are required." });
    return;
  }

  const user = await prisma.user.findUnique({ where: { email } }); // tries to match the details with details inside user table and returning first match
  if (!user || user.password !== password) {
    res.status(401).json({ message: "Invalid credentials" });
    return;
    }
    
  res.status(200).json({ message: "Logged in successfully" }); 
};