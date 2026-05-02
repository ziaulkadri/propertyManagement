import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ConfigService } from '@nestjs/config';

@Controller("user")
export class AppController {
  constructor(private readonly appService: AppService,private configService:ConfigService) {}

  @Get()
  getHello(): string {
    return this.configService.get('dbconfig.dev.url') || 'Hello World!';
  }

  @Get('/greet')
  greet(): string {
    return 'Greetings from NestJS!1x';
  } 
}
