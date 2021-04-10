import { User } from '../users/user';
import { config } from '../../configuration';
export class MediumService {
  constructor() { }

  sendNotification(user: User) {
    let sendMessage = '';
    if (config.notificationMedium == "email") {
      sendMessage = this.email(user);
    }
    else if (config.notificationMedium == "whatsup") {
      sendMessage = this.whatsUp(user);
    }
    return sendMessage;
  }
  email(user: User) {
    return `${user.name} You have got new email `
  }
  whatsUp(user: User) {
    return `${user.name} You have got new message  number : ${user.mobile} `

  }


}
