import { BadError_Response, InternalError_Response } from "./apiResponse";
enum ErrorType {
  BAD_REQUEST = "BadRequest",
}
export abstract class ApiError extends Error {
  constructor(message: string) {
    super(message);
    this.message = message;
    this.types = this;
  }
  static handler(err: ApiError, res: Response) {
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
    super(message);
  }
}
export class InternalError extends ApiError {
  constructor(message: string) {
    super(message);
  }
}
