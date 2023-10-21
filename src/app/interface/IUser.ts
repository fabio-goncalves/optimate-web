import { Avatar } from './IAvatar';

export interface User {
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
}
