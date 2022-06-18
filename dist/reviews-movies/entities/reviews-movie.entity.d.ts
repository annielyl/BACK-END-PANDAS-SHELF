import { Movie } from 'src/movies/entities/movie.entity';
import { User } from 'src/user/entities/user.entity';
export declare class ReviewsMovie {
    id: number;
    description: string;
    evaluation: number;
    movie: Movie;
    user: User[];
}
