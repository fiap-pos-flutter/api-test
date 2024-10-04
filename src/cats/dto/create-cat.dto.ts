import { IsInt, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreatePostDto {
  @IsInt()
  @ApiProperty()
  readonly id: number;

  @IsString()
  @ApiProperty()
  readonly body: string;

  @IsString()
  @ApiProperty()
  readonly title: string;
}
