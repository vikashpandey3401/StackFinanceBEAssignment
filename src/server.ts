import { config } from './configuration';
import { appFactory } from './http/app';
import { logger } from './libs/logger';
import { createUserRepository } from './data/users/userRepository';
import { UsersService } from './domain/users/usersService';
import { init } from './signals';
import { MediumService } from './domain/medium/mediumService';
const userRepository = createUserRepository();
const userService = new UsersService(userRepository);
const mediumService = new MediumService

const app = appFactory(userService,mediumService);

const server = app.listen(config.port, () => {
  logger.info(`Listening on *:${config.port}`);
});

const shutdown = init(() => {
  server.close(async () => {
  });
});

process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);
