import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateReviewsDto } from './dto/create-reviews.dto';
import { UpdateReviewsDto } from './dto/update-reviews.dto';
import { Review } from './entities/reviews.entity';

@Injectable()
export class ReviewsService {
  constructor(
    @InjectRepository(Review)
    private ReviewsRepository: Repository<Review>,
  ) {}

  create(createReviewssDto: CreateReviewsDto) {
    return this.ReviewsRepository.save(createReviewssDto);
  }

  findAll() {
    return this.ReviewsRepository.find();
  }


  findOne(id: string) {
    return this.ReviewsRepository.findOne(id,);
  }

  update(id: string, updateReviewsDto: UpdateReviewsDto) {
    return this.ReviewsRepository.update(id, updateReviewsDto);
  }

  remove(id: string) {
    return this.ReviewsRepository.delete(id);
  }
}
