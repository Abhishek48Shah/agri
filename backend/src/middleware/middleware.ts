import type { Request, Response, NextFunction } from "express";
import { Unsupported_Media_Type_Error } from "../core/apiError";
export const multipartMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (!req.headers["content-type"]?.includes("multipart/form-data")) {
    throw new Unsupported_Media_Type_Error(
      "Content-Type must be multipart/form-data",
    );
  }
  return next();
};
export const fileMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const allowed = ["image/jpeg", "image/png", "image/webp", "image/gif"];
  if (!allowed.includes(req.file.mimetype)) {
    throw new Unsupported_Midia_type_Error("File size is too large");
  }
  return next();
};
