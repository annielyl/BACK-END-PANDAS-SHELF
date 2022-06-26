import { Module } from '@nestjs/common';
import { StudiosService } from './studios.service';
import { StudiosController } from './studios.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Media } from 'src/media/entities/media.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Media])], 
  controllers: [StudiosController],
  providers: [StudiosService]
})
export class StudiosModule {}
