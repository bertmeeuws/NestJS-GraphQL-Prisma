import { Injectable } from '@nestjs/common';
import { Redis } from 'ioredis';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
