import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async findAll(): Promise<UserEntity[]> {
    const [roles, total] = await this.userRepository
      .createQueryBuilder('user')
      .offset(1 - 1) // 从多少条开始
      .limit(10) // 查询多少条数据
      .getManyAndCount(); // 查询到数据及个数，返回的是一个数组
      console.log(total);
    return roles;
  }
}
