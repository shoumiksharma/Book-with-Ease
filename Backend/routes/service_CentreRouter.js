import express from "express";
import nearest_Service_Centre from '../controllers/service_Centre.js';

const router = express();
router.post('/', nearest_Service_Centre);

export default router;