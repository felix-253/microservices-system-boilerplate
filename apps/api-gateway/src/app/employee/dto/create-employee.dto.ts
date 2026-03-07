import { ApiProperty } from '@nestjs/swagger';

export class CreateEmployeeDto {
  @ApiProperty({
    description: 'Event timestamp',
    example: '2019-11-01T00:00:00Z',
  })
  event_time: Date;

  @ApiProperty({
    description: 'Type of user event',
    example: 'view',
  })
  event_type: string;

  @ApiProperty({
    description: 'Product ID',
    example: 1003461,
  })
  product_id: number;

  @ApiProperty({
    description: 'Category ID (bigint)',
    example: '2053013555631882750',
  })
  category_id: string;

  @ApiProperty({
    description: 'Category code',
    example: 'electronics.smartphone',
  })
  category_code: string;

  @ApiProperty({
    description: 'Brand name',
    example: 'samsung',
  })
  brand: string;

  @ApiProperty({
    description: 'Product price',
    example: 489.07,
  })
  price: number;

  @ApiProperty({
    description: 'User ID',
    example: 520088904,
  })
  user_id: number;

  @ApiProperty({
    description: 'User session UUID',
    example: '4d3b30da-a5e4-49df-b1a8-ba5943f1dd33',
  })
  user_session: string;
}
