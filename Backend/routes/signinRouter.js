import express from "express";
const router = express.Router();
import userModel from "../models/user.js";
import signin from "../controllers/signin.js";

router.post('/', signin);

export default router;