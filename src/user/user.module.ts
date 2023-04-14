import { Module } from '@nestjs/common';
import { UserController } from './controller/user.controller';
import { UserService } from './service/user.service';
import { IsUserAlreadyExistConstraint } from './decorator/is-email-already-exist.decorator';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [UserService, IsUserAlreadyExistConstraint],
})
export class UserModule {}
