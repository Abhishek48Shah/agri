import type { Request, Response, NextFunction } from "express";
import { Unsupported_Media_Type_Error } from "../core/apiError";
export const multipartMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    if (!req.headers["content-type"]?.includes("multipart/form-data")) {
      throw new Unsupported_Media_Type_Error(
        "Content-Type must be multipart/form-data",
      );
    }
    return next();
  } catch (err) {
    throw err;
  }
};
