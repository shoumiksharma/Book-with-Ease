import express from "express"
const router = express.Router();
import fetchUsername from "../controllers/fetchUsername.js";

router.get('/', fetchUsername);

export default router;