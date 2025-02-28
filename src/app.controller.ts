import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('user/:id')
  getUserInfo(@Param('id') id: string) {
    return this.appService.getUserInfo(id);
  }

  @Get('status')
  getServerStatus() {
    return this.appService.getServerStatus();
  }
}
