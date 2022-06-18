import { ReviewsMovie } from './../../reviews-movies/entities/reviews-movie.entity';
import { Timestamp } from 'typeorm';

export class CreateMovieDto {
  title: string;
  description: string;
  evaluation: number;
  year: number;
  directors: string;
  genre: string;
}
