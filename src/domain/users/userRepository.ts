import { User } from './user';

export interface UserRepository {
  getAll(): Promise<User[]>;
  add(firstName: string, lastName: string, age: number,id:number,mobile:number): Promise<User>;
}
