import { Controller, Get,Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('/aaa/:id')
  findOne(@Param('id') id: string) {
    return `This action returns a #${id} cat`;
  }
}
