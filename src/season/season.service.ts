import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateSeasonDto } from './dto/create-season.dto';
import { UpdateSeasonDto } from './dto/update-season.dto';
import { Season } from './entities/season.entity';

@Injectable()
export class SeasonService {
  constructor(
    @InjectRepository(Season)
    private SeasonsRepository: Repository<Season>,
  ) {}

  create(createSeasonDto: CreateSeasonDto) {
    return this.SeasonsRepository.save(createSeasonDto);
  }

  findAll() {
    return this.SeasonsRepository.find();
  }


  findOne(id: string) {
    return this.SeasonsRepository.findOne(id);
  }

  update(id: string, updateSeasonsDto: UpdateSeasonDto) {
    return this.SeasonsRepository.update(id, updateSeasonsDto);
  }

  remove(id: string) {
    return this.SeasonsRepository.delete(id);
  }
}
