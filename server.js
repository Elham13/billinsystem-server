import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import router from "./router/routes.js";
import connectDB from "./config/db.js";

const app = express();
dotenv.config();
connectDB();

const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
