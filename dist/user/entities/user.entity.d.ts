import { ReviewsMovie } from 'src/reviews-movies/entities/reviews-movie.entity';
export declare class User {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    is_admin: boolean;
    reviewsMovie: ReviewsMovie[];
}
