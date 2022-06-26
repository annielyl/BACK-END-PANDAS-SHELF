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
    private seasonRepository: Repository<Season>,
  ) {}

  create(createseasonDto: CreateSeasonDto) {
    return this.seasonRepository.save(createseasonDto);
  }

  findAll() {
    return this.seasonRepository.find();
  }

  findOne(id: string) {
    return this.seasonRepository.findOne(id);
  }

  update(id: string, updateaseasonDto: UpdateSeasonDto) {
    return this.seasonRepository.update(id, updateaseasonDto);
  }

  remove(id: string) {
    return this.seasonRepository.delete(id);
  }
}
