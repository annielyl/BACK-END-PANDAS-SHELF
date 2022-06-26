import { Media } from "src/media/entities/media.entity";

export class CreateUserDto {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  is_admin: boolean;
  Media: Media;
}
