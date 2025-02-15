import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getUserInfo(id: string): object {
    return {
      id,
      name: '사용자',
      email: 'user@example.com'
    };
  }

  getServerStatus(): object {
    return {
      status: 'running',
      timestamp: new Date().toISOString(),
      version: '1.0.0'
    };
  }
}
