import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getIdTest(id: string): string {
    return `This action returns ---${id}--- `;
  }
}
