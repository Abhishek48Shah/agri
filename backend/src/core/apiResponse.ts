import type { Response } from "express";
enum StatusCode {
  SUCCESS = 200,
  BAD_REQUEST = 404,
}
abstract class ApiResponse {
  constructor(message, status) {
    this.message = message;
    this.status = status;
  }

  send(res: Response) {
    return;
  }
}
