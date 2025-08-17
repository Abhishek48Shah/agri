import express from "express";
import type { Request, Response, NextFunction } from "express";
import router from "./routes/index";
const app = express();
app.use(express.json());
app.use("/", router);
const errorHandler = (err, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof ApiError) {
        ApiError.handel(err);
    } else {
    }
};
app.use(errorHandler);
export default app;
