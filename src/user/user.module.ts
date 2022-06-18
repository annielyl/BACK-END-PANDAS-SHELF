//import { ReviewsMovie } from './../reviews-movies/entities/reviews-movie.entity';
import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])], 
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}