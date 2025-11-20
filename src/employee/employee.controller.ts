import { Controller, Get } from '@nestjs/common';

@Controller('employee')
export class EmployeeController {
  @Get()
  getUSer() {
    return 'Employees Data Fetched!';
  }
}
