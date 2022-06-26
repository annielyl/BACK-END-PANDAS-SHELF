import { Media } from "src/media/entities/media.entity";

export class CreateSeasonDto {
  episodes_num: number;
  description: string;
  year: number;
  media: Media

}
