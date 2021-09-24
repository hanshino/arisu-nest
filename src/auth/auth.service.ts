import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}
  login(nickname: string): string {
    const payload = { nickname };
    return this.jwtService.sign(payload);
  }
}
