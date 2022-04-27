import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from './user.repository';

@Injectable()
export class AuthService {
  constructor(
    // UserRepository를 사용하기 위한 의존성 주입
    @InjectRepository(UserRepository)
    private userRepository: UserRepository,
  ) {}
}
