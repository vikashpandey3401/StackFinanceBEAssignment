import express, { Request, Response } from 'express';
import { asyncWrapper } from '../utils/asyncWrapper';
import { UsersService } from '../../domain/users/usersService';
import { MediumService } from '../../domain/medium/mediumService';

const router = express.Router();
 
export function userRoute(userService: UsersService, mediumService: MediumService) {
  router.get(
    '/',
    asyncWrapper(async (_: Request, res: Response) => {
      let userList = [
        { firstName: "vikas", lastName: "Pandey", age: 30, id: 1, mobile: 9990291617 },
        { firstName: "Rohan", lastName: "Pandey", age: 25, id: 2, mobile: 9990291618 },
      ];

      userList.forEach(async (ele) => {
        await userService.createUser(ele.firstName, ele.lastName, ele.age, ele.id, ele.mobile);
      })
      const users = await userService.getAllUsers();
      let messageList = users.map(ele => {
        return (mediumService.sendNotification(ele));
      })
      res.json(messageList);
    }),
  );



  return router;
}
