import { Controller, Get, Query } from '@nestjs/common';
import { UserService } from './product.service';
import { UserResult } from './product.entity';

@Controller('product')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Get()
  findAll(@Query() query: Object): Promise<UserResult> {
    return this.userService.findAll(query);
  }
}
