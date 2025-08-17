enum ErrorType {
  BAD_REQUEST = "BadRequest",
}
import { BadError_Response } from "./apiResponse";
export abstract class ApiError extends Error {
  constructor(message, types) {
    this.message = message;
    this.types = this;
    super(this.message);
  }
  handler(err: ApiError, res: Response) {
    switch (err.types) {
      case ErrorType.BAD_REQUEST:
        return new BadError_Response(err.message).send(res);
      default:
        return new InternalError_Response(err.message).send(res);
    }
  }
}
export class BadRequest extends ApiError {
  constructor(message: string) {
    super(this.message);
  }
}
