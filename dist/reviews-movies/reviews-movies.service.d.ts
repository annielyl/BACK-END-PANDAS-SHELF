import { Repository } from 'typeorm';
import { CreateReviewsMovieDto } from './dto/create-reviews-movie.dto';
import { UpdateReviewsMovieDto } from './dto/update-reviews-movie.dto';
import { ReviewsMovie } from './entities/reviews-movie.entity';
export declare class ReviewsMoviesService {
    private ReviewsMoviesRepository;
    constructor(ReviewsMoviesRepository: Repository<ReviewsMovie>);
    create(createReviewsMoviesDto: CreateReviewsMovieDto): Promise<CreateReviewsMovieDto & ReviewsMovie>;
    findAll(): Promise<ReviewsMovie[]>;
    findOne(id: string): Promise<ReviewsMovie>;
    update(id: string, updateReviewsMovieDto: UpdateReviewsMovieDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
