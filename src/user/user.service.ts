import { Injectable } from '@nestjs/common';
import { CONSTANTS } from 'src/constants';
import { User } from './user';

@Injectable()
export class UserService {
  public users: User[] = [
    {
      username: 'user1',
      password: 'pass',
      email: 'user1@mail.com',
      age: 20,
      role: CONSTANTS.ROLES.ANDROID_DEVELOPER,
    },
    {
      username: 'user2',
      password: 'pass',
      email: 'user2@mail.com',
      age: 21,
      role: CONSTANTS.ROLES.WEB_DEVELOPER,
    },
    {
      username: 'user3',
      password: 'pass',
      email: 'user3@mail.com',
      age: 22,
      role: CONSTANTS.ROLES.ANDROID_DEVELOPER,
    },
    {
      username: 'user4',
      password: 'pass',
      email: 'user4@mail.com',
      age: 22,
      role: CONSTANTS.ROLES.WEB_DEVELOPER,
    },
  ];

  getUserByUsername(userName: string): User {
    return this.users.find((user: User) => user.username === userName);
  }
}
