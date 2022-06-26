import { Module } from '@nestjs/common';
import { GenreService } from './genre.service';
import { GenreController } from './genre.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Genre } from './entities/genre.entity';
import { Media } from 'src/media/entities/media.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Genre, Media])], 
  controllers: [GenreController],
  providers: [GenreService],
})
export class GenresModule {}
