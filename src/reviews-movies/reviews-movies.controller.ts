import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ReviewsMoviesService } from './reviews-movies.service';
import { CreateReviewsMovieDto } from './dto/create-reviews-movie.dto';
import { UpdateReviewsMovieDto } from './dto/update-reviews-movie.dto';

@Controller('reviews-movies')
export class ReviewsMoviesController {
  constructor(private readonly reviewsMoviesService: ReviewsMoviesService) {}

  @Post()
  create(@Body() createReviewsMovieDto: CreateReviewsMovieDto) {
    return this.reviewsMoviesService.create(createReviewsMovieDto);
  }

  @Get()
  findAll() {
    return this.reviewsMoviesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.reviewsMoviesService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateReviewsMovieDto: UpdateReviewsMovieDto) {
    return this.reviewsMoviesService.update(id, updateReviewsMovieDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.reviewsMoviesService.remove(id);
  }
}
