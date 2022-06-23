import { Injectable } from '@nestjs/common'
import { UserService } from '../user/user.service'
import * as bcrypt from 'bcrypt'
@Injectable()
export class AuthService {
  constructor(private userServisce: UserService) {}

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.userServisce.findOne(email);
    if (user && bcrypt.compare(pass, user.password)) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }   
}
