import express from "express"
import { createOrder, getOrders, myOrders } from "../controller/order.controller.js";

const router = express.Router();

router.post("/", createOrder);
router.get("/", getOrders);
router.get("/my-orders/:userId", myOrders)

export default router;