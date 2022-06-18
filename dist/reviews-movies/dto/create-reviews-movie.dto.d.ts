import { User } from 'src/user/entities/user.entity';
import { Movie } from '../../movies/entities/movie.entity';
export declare class CreateReviewsMovieDto {
    description: string;
    evaluations: string;
    Movie: Movie;
    User: User;
}
