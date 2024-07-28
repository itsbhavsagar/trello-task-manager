import type { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import connectToDatabase from "../../../backend/utils/db";
import User from "../../../backend/models/User";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const { email, password } = req.body;

    try {
      await connectToDatabase();
      const user = await User.findOne({ email });

      if (user && bcrypt.compareSync(password, user.password)) {
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET!, {
          expiresIn: "1h",
        });

        res.status(200).json({ token });
      } else {
        res.status(401).json({ message: "Invalid email or password" });
      }
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
};

export default handler;
