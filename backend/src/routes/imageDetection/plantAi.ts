import express from "express";
import type { Request, Response, NextFunction } from "express";
import multer from "multer";
import { BadRequest } from "../../helper/apiError";
import imageService from "../../core/imageService";
import { SuccessResponse } from "../../core/apiResponse";
const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });
router.post(
  "/diagnose",
  upload.single("image"),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      if (!req.file) {
        console.log("No file to show");
      }
      const data = await imageService(req.file.buffer);
      new SuccessResponse(data, "Successfully fetch the data").send(res);
    } catch (err: any) {
      return next(err);
    }
  },
);
export default router;
