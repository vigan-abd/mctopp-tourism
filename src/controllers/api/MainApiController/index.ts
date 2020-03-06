import { Request, Response, NextFunction } from "express";
import * as HTTP_STATUS from 'http-status-codes'
import TestService from "@services/TestService";

export default class MainAPIController {
  private readonly testService: TestService

  constructor(testService: TestService) {
    this.testService = testService

    this.index = this.index.bind(this)
  }

  async index (req: Request, res: Response, next: NextFunction) {
    try {
      const tests = await this.testService.findAllTests()
      res.statusCode = HTTP_STATUS.OK
      return res.json({ tests })
    } catch (err) {
      return next(err)
    }
  }
}
