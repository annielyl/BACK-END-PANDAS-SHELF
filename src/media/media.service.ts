import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMediaDto } from './dto/create-media.dto';
import { UpdateMediaDto } from './dto/update-media.dto';
import { Media } from './entities/media.entity';

@Injectable()
export class MediasService {
  constructor(
    @InjectRepository(Media)
    private mediasRepository: Repository<Media>,
  ) {}

  create(createmediaDto: CreateMediaDto) {
    return this.mediasRepository.save(createmediaDto);
  }

  findAll() {
    return this.mediasRepository.find({ relations: ['Reviewsmedia'] });
  }

  findOne(id: string) {
    return this.mediasRepository.findOne(id, { relations: ['Reviewsmedia'] });
  }

  update(id: string, updatemediaDto: UpdateMediaDto) {
    return this.mediasRepository.update(id, updatemediaDto);
  }

  remove(id: string) {
    return this.mediasRepository.delete(id);
  }
}
