import { UserService } from '../user/user.service';
export declare class AuthService {
    private userServisce;
    constructor(userServisce: UserService);
    validateUser(username: string, pass: string): Promise<any>;
}
