import { Media } from 'src/media/entities/media.entity';
import { User } from 'src/user/entities/user.entity';

export class CreateReviewsDto {
  reiew_text: string;
  title: string;
  evaluation: number;
  user: User;
  Media: Media;
}
