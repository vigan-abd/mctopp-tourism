import ITestRepository from "@repositories/Interfaces/ITestRepository";
import { Test, TestModel } from '@models/Domain/Test'

export default class TestRepository implements ITestRepository {
  async find(): Promise<Test[]> {
    const results = await TestModel.find();
    return results;
  }
}
