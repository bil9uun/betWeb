import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import AuthRoutes from "./routes/auth.ts";
import UserRoutes from "./routes/user.ts";

dotenv.config();
const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello betWeb");
});

app.use("/auth", AuthRoutes);
app.use("/user", UserRoutes);

const MONGO_URI = process.env.MONGO_URI as string;
mongoose
  .connect(MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error: ", err));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
