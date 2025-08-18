import type { Response } from "express";
enum ResponseStatus {
  SUCCESS = 200,
  BAD_REQUEST = 404,
}
abstract class ApiResponse {
  constructor(status, message) {
    this.message = message;
    this.status = status;
  }
  protected process() {}
  send(res: Response) {
    return;
  }
  private sanitize() {}
}
export class BadError_Response extends ApiResponse {
  constructor(
    status: number = ResponseStatus.BAD_REQUEST,
    message: string = "Bad request",
  ) {
    super(status, message);
  }
}
export class InternalError_Response extends ApiResponse {
  constructor(
    status: number = ResponseStatus.INTERNAL_ERROR,
    message: string = "Internal server error",
  ) {
    super(status, message);
  }
}
export class SuccessMsgResponse extends ApiResponse {
  constructor(
    status: number = ResponseStatus.Success,
    message: string = " Successfull",
  ) {
    super(status, message);
  }
}
