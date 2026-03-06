import { ApiProperty } from '@nestjs/swagger';

export class CreateEmployeeDto {
  @ApiProperty({
    description: 'Employee ID',
    example: 1,
  })
  id: number;

  @ApiProperty({
    description: 'Employee name',
    example: 'John Doe',
  })
  name: string;

  @ApiProperty({
    description: 'Employee age',
    example: 30,
  })
  age: number;
}
