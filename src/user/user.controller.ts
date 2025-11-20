import { Controller, Get } from '@nestjs/common';

@Controller('user') // Decorator
export class UserController {
  @Get()
  getUSer() {
    return 'USer Data Fetched!';
  }
}
