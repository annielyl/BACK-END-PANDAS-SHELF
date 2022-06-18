import { User } from 'src/user/entities/user.entity';
import { Movie } from '../../movies/entities/movie.entity';

export class CreateReviewsMovieDto {
  description: string;
  evaluations: string;
  Movie: Movie;
  User: User;
}
