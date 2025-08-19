import express from "express";
import type { Request, Response, NextFunction } from "express";
import { ApiError, InternalError } from "./core/apiError";
import router from "./routes/index";
const app = express();
app.use(express.json());
app.use("/", router);
const errorHandler = (err, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof ApiError) {
    ApiError.handler(err, res);
  } else {
    const internalError = new InternalError(
      "Internal server error, please try again later",
    );
    internalError.send(res);
  }
};
app.use(errorHandler);
export default app;
