import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable()
export class UserService {

  users: User[] = [
    new User(1, "Bob", 10),
    new User(2, "Dana", 20),
    new User(3, "Sam", 30),
    new User(4, "Nik", 40)
  ];

  constructor() { }

  getUsers(){
    return this.users;
  }
}
