import express from "express";
import type { Request, Response, NextFunction } from "express";
import { BadRequest } from "../core/apiError";
import plantAi from "./imageDetection/plantAi";
const router = express.Router();
router.use("/plant", plantAi);
export default router;
