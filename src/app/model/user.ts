import { Avatar } from '../interface/IAvatar';

export class User {
  id?: number;
  firstName: String;
  lastName: String;
  username: String;
  password: String;
  email: String;
  activated: boolean;
  receiveEmails: boolean;
  roles?: string[];
  avatar: Avatar;

  constructor(item: any) {
    this.id = item?.id;
    this.firstName = item.firstName;
    this.lastName = item.lastName;
    this.username = item.username;
    this.password = item.password;
    this.email = item.email;
    this.activated = item.activated;
    this.receiveEmails = item.receiveEmails;
    this.roles = ['user', 'admin'];
    this.avatar = {
      id: item?.id,
      // avatar35: item.avatar,
      // avatar70: item.avatar,
      avatar220: item.avatar
    }
  }
}
