import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { IsUserAlreadyExist } from '../decorator/is-email-already-exist.decorator';
import { Exclude, Expose } from 'class-transformer';

export class UserDto {
  @Expose({
    name: 'e-mail',
    toPlainOnly: true,
  })
  @IsUserAlreadyExist({ message: 'The email provided already exists' })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @Expose({
    name: 'userName',
    toPlainOnly: true,
  })
  @IsNotEmpty()
  @IsString()
  name: string;

  @Exclude({
    toPlainOnly: true,
  })
  @IsNotEmpty()
  @IsString()
  password: string;
}
