import express from "express";
import type { Request, Response, NextFunction } from "express";
const app = express();
app.use(express.json());
const errorHandler = (err, req: Request, res: Response, next: NextFunction) => {
  if (err) {
  }
};
app.use(errorHandler);
export default app;
