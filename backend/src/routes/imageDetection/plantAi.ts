import express from "express";
import type { Request, Response, NextFunction } from "express";
import multer from "multer";
import { BadRequest } from "../../helper/apiError";
import imageService from "../../core/imageService";
import { SuccessResponse } from "../../core/apiResponse";
import { multipartMiddleware } from "../../middleware/middleware";
const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

router.post(
  "/diagnose",
  multipartMiddleware,
  upload.single("image"),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = await imageService(req.file.buffer);
      new SuccessResponse(data, "Successfully fetch the data").send(res);
    } catch (err: any) {
      throw err;
    }
  },
);
export default router;
