import { PartialType } from '@nestjs/mapped-types';
import { CreateReviewsMovieDto } from './create-reviews-movie.dto';

export class UpdateReviewsMovieDto extends PartialType(CreateReviewsMovieDto) {}
