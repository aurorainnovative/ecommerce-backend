import express from "express";
import cors from "cors"
import dotenv from "dotenv"
import { dbConnect } from "./config/dbConnect.js";
import userRouter from "./routes/user.route.js";
import orderRouter from "./routes/order.route.js"

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const DB_URL = process.env.DB_URI || "";
const PORT = process.env.PORT || 8000;

dbConnect(DB_URL);

app.use("/user", userRouter);
app.use("/order", orderRouter);

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`)
})