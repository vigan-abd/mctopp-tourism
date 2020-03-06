import { Test } from "@models/Domain/Test";
import ITestRepository from "@repositories/Interfaces/ITestRepository";

export default class TestService {
  protected readonly repository: ITestRepository

  constructor(repository: ITestRepository) {
    this.repository = repository;
  }

  async findAllTests() : Promise<Test[]> {
    return this.repository.find()
  } 
}
