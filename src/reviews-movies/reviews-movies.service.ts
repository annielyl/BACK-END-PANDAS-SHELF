import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateReviewsMovieDto } from './dto/create-reviews-movie.dto';
import { UpdateReviewsMovieDto } from './dto/update-reviews-movie.dto';
import { ReviewsMovie } from './entities/reviews-movie.entity';

@Injectable()
export class ReviewsMoviesService {
  constructor(
    @InjectRepository(ReviewsMovie)
    private ReviewsMoviesRepository: Repository<ReviewsMovie>,
  ) {}

  create(createReviewsMoviesDto: CreateReviewsMovieDto) {
    return this.ReviewsMoviesRepository.save(createReviewsMoviesDto);
  }

  findAll() {
    return this.ReviewsMoviesRepository.find({ relations: ['movie'] });
  }


  findOne(id: string) {
    return this.ReviewsMoviesRepository.findOne(id, { relations: ['movie'] });
  }

  update(id: string, updateReviewsMovieDto: UpdateReviewsMovieDto) {
    return this.ReviewsMoviesRepository.update(id, updateReviewsMovieDto);
  }

  remove(id: string) {
    return this.ReviewsMoviesRepository.delete(id);
  }
}
