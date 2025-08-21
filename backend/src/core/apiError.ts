import { BadError_Response, InternalError_Response } from "./apiResponse";
enum ErrorType {
  BAD_REQUEST = "BadRequest",
  UNSUPPORTED_TYPE = "UnSupportedMideaType",
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
      case ErrorType.UNSUPPORTED_TYPE:
        return new UnSupportedType(err.message).send(res);
      default:
        return new InternalError_Response(err.message).send(res);
    }
  }
}
export class BadRequest extends ApiError {
  constructor(message: string = "Bad request, Please try again later") {
    super(message);
  }
}
export class InternalError extends ApiError {
  constructor(
    message: string = "Internal server error, Please try again later",
  ) {
    super(message);
  }
}
export class Unsupported_Media_Type_Error extends ApiError {
  constructor(message: string = "Content-Type must be multipart/form-data") {
    super(message);
  }
}
