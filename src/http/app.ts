import express from 'express';
import bodyParser from 'body-parser';
import { UsersService } from '../domain/users/usersService';
import { errorHandler } from './routes/error';
import { userRoute } from './routes/user';
import { MediumService } from '../domain/medium/mediumService';

const app = express();
app.use(bodyParser.json());

export const appFactory = (userService: UsersService,mediumService:MediumService) => {
  const user = userRoute(userService,mediumService);
  app.use('/users', user);
  app.use(errorHandler);
  return app;
};
