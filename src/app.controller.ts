import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { MyLogger } from './logger-service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    MyLogger.info('这是一条测试日志111')
    return this.appService.getHello();
  }
  @Get('/aaa/:id')
  getIdTest(@Param('id') id: string) {
    MyLogger.info('这是一条测试日志222')
    return this.appService.getIdTest(id);
  }
}
