import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserService } from '../service/user.service';
import { UserDto } from '../dto/user.dto';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getUsers(): UserDto[] {
    return this.userService.getUsers();
  }

  @Get(':email')
  getUserByEmail(@Param('email') email: string): UserDto {
    return this.userService.getUserByEmail(email);
  }

  @Post()
  createUser(@Body() user: UserDto): UserDto {
    return this.userService.createUser(user);
  }
}
