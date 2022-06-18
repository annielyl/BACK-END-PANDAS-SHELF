import { Module } from '@nestjs/common';
import { ReviewsMoviesService } from './reviews-movies.service';
import { ReviewsMoviesController } from './reviews-movies.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Movie } from 'src/movies/entities/movie.entity';
import { ReviewsMovie } from './entities/reviews-movie.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ReviewsMovie, Movie])],
  controllers: [ReviewsMoviesController],
  providers: [ReviewsMoviesService]
})
export class ReviewsMoviesModule {}
