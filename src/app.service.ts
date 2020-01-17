import { Injectable, HttpService } from '@nestjs/common';
import { Logger } from './logger-service';

@Injectable()
export class AppService {
  constructor(private readonly httpService: HttpService) { }

  async getHello(): Promise<string> {
    let res = await this.httpService.get('http://192.168.220.188:3030/aaa/666').toPromise();
    Logger.info(`这是一条测试日志111///${JSON.stringify(res.data)}`)
    return JSON.stringify(res.data);
  }
  getIdTest(id: string): string {
    Logger.info('这是一条测试日志222')
    return `This action returns ---${id}--- `;
  }
}
