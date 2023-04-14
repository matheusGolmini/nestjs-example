import { Injectable } from '@nestjs/common';
import { UserDto } from '../dto/user.dto';

@Injectable()
export class UserService {
  private users: Array<UserDto> = [
    { email: 'matheus@gmail.com', name: 'Matheus', password: 'senha123' },
  ];

  getUsers(): UserDto[] {
    return this.users;
  }

  getUserByEmail(email: string): UserDto {
    return this.users.find((user) => user.email === email);
  }

  createUser(user: UserDto): UserDto {
    this.users.push(user);
    return user;
  }
}
