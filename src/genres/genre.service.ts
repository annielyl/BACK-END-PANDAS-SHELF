import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateGenreDto } from './dto/create-genre.dto';
import { UpdateGenreDto } from './dto/update-genre.dto';
import { Genre } from './entities/genre.entity';

@Injectable()
export class GenreService {
  constructor(
    @InjectRepository(Genre)
    private genresRepository: Repository<Genre>,
  ) {}

  create(createGenreDto: CreateGenreDto) {
    return this.genresRepository.save(createGenreDto);
  }

  findAll() {
    return this.genresRepository.find();
  }


  findOne(id: string) {
    return this.genresRepository.findOne(id);
  }

  update(id: string, updategenresDto: UpdateGenreDto) {
    return this.genresRepository.update(id, updategenresDto);
  }

  remove(id: string) {
    return this.genresRepository.delete(id);
  }
}
