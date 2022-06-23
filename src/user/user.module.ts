//import { ReviewsMovie } from './../reviews-movies/entities/reviews-movie.entity';
import { forwardRef, Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { AuthModule } from '../auth/auth.module';
import { LocalStrategy } from 'src/auth/local.strategy';
import { AuthService } from 'src/auth/auth.service';

@Module({
  imports: [TypeOrmModule.forFeature([User]), forwardRef(() => AuthModule)], 
  controllers: [UserController],
  providers: [UserService, LocalStrategy, AuthService],
  exports: [UserService]
})
export class UserModule {}
