import type { Response } from "express";
enum ResponseStatus {
  SUCCESS = 200,
  BAD_REQUEST = 400,
  INTERNAL_ERROR = 500,
  UN_SUPPORTED_TYPE = 415,
}

abstract class ApiResponse {
  constructor(
    public status: number,
    public message: string,
  ) {}
  protected process(data, res: Response) {
    return res.status(this.status).json(this.sanitize(data));
  }
  send(res: Response) {
    return this.process(this, res);
  }
  private sanitize(data) {
    const { status, ...clone } = data;
    return clone;
  }
}
export class BadError_Response extends ApiResponse {
  constructor(message: string) {
    super(ResponseStatus.BAD_REQUEST, message);
  }
}
export class InternalError_Response extends ApiResponse {
  constructor(message: string) {
    super(ResponseStatus.INTERNAL_ERROR, message);
  }
}
export class SuccessMsgResponse extends ApiResponse {
  constructor(message: string = " Successfull") {
    super(ResponseStatus.SUCCESS, message);
  }
}
export class SuccessResponse extends ApiResponse {
  constructor(
    public message: string,
    protected data: object,
    public status: number = ResponseStatus.SUCCESS,
  ) {
    super(status, message);
  }
  send(res: Response) {
    return super.process(this, res);
  }
}
export class UnSupportedType extends ApiResponse {
  constructor(public message: string) {
    super(Response.UN_SUPPORTED_TYPE, message);
  }
}
