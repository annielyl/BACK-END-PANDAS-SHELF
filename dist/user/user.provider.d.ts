import { Connection, Repository } from 'typeorm';
import { User } from './entities/user.entity';
export declare const userProviders: {
    provide: string;
    useFactory: (connection: Connection) => Repository<User>;
    inject: string[];
}[];
