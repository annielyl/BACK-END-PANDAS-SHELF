import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { Movie } from './entities/movie.entity';

@Injectable()
export class MoviesService {
  constructor(
    @InjectRepository(Movie)
    private moviesRepository: Repository<Movie>,
  ) {}

  create(createMovieDto: CreateMovieDto) {
    return this.moviesRepository.save(createMovieDto);
  }

  findAll() {
    return this.moviesRepository.find({ relations: ['ReviewsMovie'] });
  }

  findOne(id: string) {
    return this.moviesRepository.findOne(id, { relations: ['ReviewsMovie'] });
  }

  update(id: string, updateMovieDto: UpdateMovieDto) {
    return this.moviesRepository.update(id, updateMovieDto);
  }

  remove(id: string) {
    return this.moviesRepository.delete(id);
  }
}
