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
    private ReviewssRepository: Repository<Review>,
  ) {}

  create(createReviewssDto: CreateReviewsDto) {
    return this.ReviewssRepository.save(createReviewssDto);
  }

  findAll() {
    return this.ReviewssRepository.find();
  }


  findOne(id: string) {
    return this.ReviewssRepository.findOne(id,);
  }

  update(id: string, updateReviewsDto: UpdateReviewsDto) {
    return this.ReviewssRepository.update(id, updateReviewsDto);
  }

  remove(id: string) {
    return this.ReviewssRepository.delete(id);
  }
}
