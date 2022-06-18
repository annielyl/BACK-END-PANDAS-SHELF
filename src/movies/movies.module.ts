import { ReviewsMovie } from 'src/reviews-movies/entities/reviews-movie.entity';
import { Module } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { MoviesController } from './movies.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Movie } from './entities/movie.entity';
import { Genre } from '../genres/entities/genre.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Movie, Genre, ReviewsMovie])],
  controllers: [MoviesController],
  providers: [MoviesService],
})
export class MoviesModule {}
