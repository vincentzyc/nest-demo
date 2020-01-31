import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from './user.entity';

interface UserQuery {
  pageSize?: number;
  pageIndex?: number;
}

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) { }

  async findAll(query: UserQuery): Promise<UserEntity[]> {
    const [users, total] = await this.userRepository
      .createQueryBuilder('user')
      .offset((query.pageIndex || 1 - 1) * query.pageSize) // 从多少条开始
      .limit(query.pageSize) // 查询多少条数据
      .getManyAndCount(); // 查询到数据及个数，返回的是一个数组
    return users;
  }
}
