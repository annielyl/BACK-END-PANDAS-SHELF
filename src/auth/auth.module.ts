import { forwardRef, Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserModule } from '../user/user.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';


@Module({
  imports: [
    forwardRef(() => UserModule), PassportModule],
    providers: [AuthService, LocalStrategy],
})
export class AuthModule {}
