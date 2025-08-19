import type { Request, Response, NextFunction } from "express";
import joi from "joi";
enum ValidationSource {
  BODY = "body",
  HEADER = "header",
}

export default (schema, source: ValidationSource = ValidationSource.BODY) =>
  (req: Request, res: Response, next: NextFunction) => {
    try {
      const { error } = schema.validate(req[source]);
      if (error) {
        console.log(error);
      }
    } catch (err: any) {}
  };
