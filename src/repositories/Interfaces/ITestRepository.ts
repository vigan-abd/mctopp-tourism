import { Test } from '@models/Domain/Test';

interface ITestRepository {
  find(): Promise<Test[]>
}

export default ITestRepository
