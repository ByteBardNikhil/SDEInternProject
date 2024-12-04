import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller() // This sets the base route for this controller
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get() // This handles GET requests to the root URL ("/")
  getHello(): string {
    return this.appService.getHello(); // Ensure this method exists in AppService
  }
}
