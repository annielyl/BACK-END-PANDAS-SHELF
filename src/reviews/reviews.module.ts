import { Media } from '../media/entities/media.entity';
import { Module } from '@nestjs/common';
import { ReviewsService } from './reviews.service';
import { ReviewsController } from './reviews.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Review } from './entities/reviews.entity';
import { User } from 'src/user/entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Review, Media , User])],
  controllers: [ReviewsController],
  providers: [ReviewsService]
})
export class ReviewsModule {}
