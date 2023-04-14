import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { IsUserAlreadyExist } from '../decorator/is-email-already-exist.decorator';

export class UserDto {
  @IsUserAlreadyExist({ message: 'The email provided already exists' })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  password: string;
}
