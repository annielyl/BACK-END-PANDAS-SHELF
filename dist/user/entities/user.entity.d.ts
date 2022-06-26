import { Media } from 'src/media/entities/media.entity';
export declare class User {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    birthdate: Date;
    isAdmin: boolean;
    picture: string;
    userName: string;
    media: Media[];
}
