import express from "express";
import type { Request, Response, NextFunction } from "express";
import multer from "multer";
import axios from "axios";
import { API_KEY } from "../../config";
import { BadRequest } from "../../helper/apiError";
const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });
router.post("/diagnose", upload.single("image"), async (req, res, next) => {
  try {
    new BadRequest("Hello world");
    console.log(req.file);
    res.send("file recived");
  } catch (err: any) {
    consoel.log(err);
  }
});
export default router;
