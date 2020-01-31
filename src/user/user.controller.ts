import { Controller, Get,Query } from '@nestjs/common';
import { UserService } from './user.service';
import { UserEntity } from './user.entity';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  findAll(@Query() query: Object): Promise<UserEntity[]> {
    return this.userService.findAll(query);
  }
}
