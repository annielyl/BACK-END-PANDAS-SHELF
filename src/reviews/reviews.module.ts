import { Media } from '../media/entities/media.entity';
import { Module } from '@nestjs/common';
import { ReviewsService } from './reviews.service';
import { ReviewsController } from './reviews.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Reviews } from './entities/reviews.entity';
import { User } from 'src/user/entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Reviews, Media , User])],
  controllers: [ReviewsController],
  providers: [ReviewsService]
})
export class ReviewsModule {}
