import { User } from '../../domain/users/user';
import { UserRepository } from '../../domain/users/userRepository';


export function createUserRepository(): UserRepository {
  let users: User[] = [];
  async function getAll(): Promise<User[]> {
    return users
  }

  async function add(
    firstName: string,
    lastName: string,
    age: number,
    id: number,
    mobile:number
  ): Promise<User> {
    let user = toUser(firstName, lastName, age, id,mobile);
    users.push(user);
    return user;
  }

  function toUser(firstName: string, lastName: string, age: number, id: number,mobile:number): User {
    return {
      name: `${firstName} ${lastName}`,
      age: age,
      id: id,
      mobile:mobile
    };
  };

  return {
    getAll,
    add,
  };
}
