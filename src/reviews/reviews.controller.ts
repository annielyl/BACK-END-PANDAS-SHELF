import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ReviewsService } from './reviews.service';
import { CreateReviewsDto } from './dto/create-reviews.dto';
import { UpdateReviewsDto } from './dto/update-reviews.dto';

@Controller('reviews')
export class ReviewsController {
  constructor(private readonly reviewsService: ReviewsService) {}

  @Post()
  create(@Body() createReviewsDto: CreateReviewsDto) {
    return this.reviewsService.create(createReviewsDto);
  }

  @Get()
  findAll() {
    return this.reviewsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.reviewsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateReviewsMovieDto: UpdateReviewsDto) {
    return this.reviewsService.update(id, updateReviewsMovieDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.reviewsService.remove(id);
  }
}
