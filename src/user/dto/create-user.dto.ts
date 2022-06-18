import { ReviewsMovie } from "src/reviews-movies/entities/reviews-movie.entity";

export class CreateUserDto {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  is_admin: boolean;
}
