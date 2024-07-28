import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectToDatabase from "./utils/db";
import authRoutes from "./routes/authRoutes";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", authRoutes);

connectToDatabase()
  .then(() => {
    app.listen(5000, () => {
      console.log("Server is running on port 5000");
    });
  })
  .catch((error) => {
    console.error("Database connection failed:", error);
  });
