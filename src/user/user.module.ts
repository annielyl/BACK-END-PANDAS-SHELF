import { forwardRef, Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { AuthModule } from '../auth/auth.module';
import { LocalStrategy } from 'src/auth/local.strategy';
import { AuthService } from 'src/auth/auth.service';
import { Media } from 'src/media/entities/media.entity';
import { Review } from 'src/reviews/entities/reviews.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, Media, Review]), forwardRef(() => AuthModule)], 
  controllers: [UserController],
  providers: [UserService, LocalStrategy, AuthService],
  exports: [UserService]
})
export class UserModule {}
