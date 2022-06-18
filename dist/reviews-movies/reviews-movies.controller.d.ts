import { ReviewsMoviesService } from './reviews-movies.service';
import { CreateReviewsMovieDto } from './dto/create-reviews-movie.dto';
import { UpdateReviewsMovieDto } from './dto/update-reviews-movie.dto';
export declare class ReviewsMoviesController {
    private readonly reviewsMoviesService;
    constructor(reviewsMoviesService: ReviewsMoviesService);
    create(createReviewsMovieDto: CreateReviewsMovieDto): Promise<CreateReviewsMovieDto & import("./entities/reviews-movie.entity").ReviewsMovie>;
    findAll(): Promise<import("./entities/reviews-movie.entity").ReviewsMovie[]>;
    findOne(id: string): Promise<import("./entities/reviews-movie.entity").ReviewsMovie>;
    update(id: string, updateReviewsMovieDto: UpdateReviewsMovieDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
