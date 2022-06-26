import { Media } from "src/media/entities/media.entity";
export declare class CreateUserDto {
    firstName: string;
    lastName: string;
    email: string;
    birthdate: Date;
    password: string;
    is_admin: boolean;
    Media: Media;
}
