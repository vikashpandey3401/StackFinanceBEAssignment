import { UserRepository } from './userRepository';


export class UsersService {
  constructor(private readonly userRepository: UserRepository) {}

  async getAllUsers() {
    const users = await this.userRepository.getAll();
    return users;
  }

  async createUser(
    firstName: string,
    lastName: string,
    age: number,
    id:number,
    mobile:number
  ) {
    // TODO: catch possible errors here and rethrow a custom error you defined instead
    return this.userRepository.add(firstName, lastName, age,id,mobile);
  }
}
