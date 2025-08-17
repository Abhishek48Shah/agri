import express from "express";
import type { Request, Response, NextFunction } from "express";
import plantAi from "./imageDetection/plantAi";
const router = express.Router();
router.use("/plant", plantAi);
export default router;
