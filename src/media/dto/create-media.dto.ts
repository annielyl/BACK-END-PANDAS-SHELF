import { Timestamp } from 'typeorm';
import { Season } from 'src/season/entities/season.entity';

export class CreateMediaDto {
  title: string;
  duration: Timestamp;
  description: string;
  evaluation: number;
  releaseDate: Date;
  picture: string;
  isSerie: boolean;
  Season: Season;
}
