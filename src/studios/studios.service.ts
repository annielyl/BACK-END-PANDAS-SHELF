import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateStudioDto } from './dto/create-studio.dto';
import { UpdateStudioDto } from './dto/update-studio.dto';
import { Studio } from './entities/studio.entity';

@Injectable()
export class StudiosService {
  constructor(
    @InjectRepository(Studio)
    private StudiosRepository: Repository<Studio>,
  ) {}

  create(createStudioDto: CreateStudioDto) {
    return this.StudiosRepository.save(createStudioDto);
  }

  findAll() {
    return this.StudiosRepository.find();
  }


  findOne(id: string) {
    return this.StudiosRepository.findOne(id);
  }

  update(id: string, updateStudiosDto: UpdateStudioDto) {
    return this.StudiosRepository.update(id, updateStudiosDto);
  }

  remove(id: string) {
    return this.StudiosRepository.delete(id);
  }
}
