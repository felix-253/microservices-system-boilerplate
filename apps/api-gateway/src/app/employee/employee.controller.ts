import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { EmployeeService } from './employee.service';
import { CreateEmployeeDto } from './dto/create-employee.dto';

@Controller('employee')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  @Get('all')
  async getEmployees(@Param() data: any): Promise<any> {
    return await this.employeeService.get(data);
  }

  @Post()
  @ApiOperation({ summary: 'Create a new employee' })
  @ApiBody({
    type: CreateEmployeeDto,
    description: 'Employee creation payload',
  })
  @ApiResponse({
    status: 201,
    description: 'Employee creation event sent successfully',
    schema: {
      example: {
        message: 'Employee creation event sent',
      },
    },
  })
  @ApiResponse({
    status: 400,
    description: 'Invalid employee data',
  })
  postEmployee(@Body() data: CreateEmployeeDto) {
    console.log('sendd');
    return this.employeeService.createEmployee(data);
  }
}
