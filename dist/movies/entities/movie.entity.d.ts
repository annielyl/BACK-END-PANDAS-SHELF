import { ReviewsMovie } from 'src/reviews-movies/entities/reviews-movie.entity';
export declare class Movie {
    id: number;
    title: string;
    evaluation: number;
    description: string;
    year: number;
    directors: string;
    genre: string;
    ReviewsMovie: ReviewsMovie[];
}
