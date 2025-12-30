import express from "express"
import { adminDashboard, createUser, getAllUsers, loginUser } from "../controller/user.controller.js";

const router = express.Router();

router.post("/signup", createUser)
router.post("/login", loginUser)
router.get("/all", getAllUsers)
router.get("/dashboard", adminDashboard)

export default router;