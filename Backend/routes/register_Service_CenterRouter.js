import express from "express";
import regService from '../controllers/register_Service_Centre.js'

const router = express.Router();

router.post('/', regService);

export default router;