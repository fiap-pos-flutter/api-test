import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { CatsService } from './cats.service';
import { CreatePostDto } from './dto/create-cat.dto';

@ApiBearerAuth()
@ApiTags('cats')
@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Post()
  @ApiOperation({ summary: 'Create cat' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async create(@Body() data: CreatePostDto): Promise<CreatePostDto> {
    return this.catsService.create(data);
  }

  @Get(':id')
  @ApiResponse({
    status: 200,
    description: 'The found record',
    type: CreatePostDto,
  })
  findOne(@Param('id') id: number): CreatePostDto {
    return this.catsService.findOne(id);
  }

  @Get()
  @ApiResponse({
    status: 200,
    description: 'The found record',
    type: CreatePostDto,
  })
  findAll(): CreatePostDto[] {
    return this.catsService.findAll();
  }

  @Delete(':id')
  @ApiResponse({
    status: 200,
    description: 'The found record',
    type: CreatePostDto,
  })
  deleteOne(@Param('id') id: number): CreatePostDto[] {
    return this.catsService.deleteOne(id);
  }

  @Put()
  @ApiResponse({
    status: 200,
    description: 'The found record',
    type: CreatePostDto,
  })
  updateOne(@Body() data: CreatePostDto): CreatePostDto[] {
    return this.catsService.updateOne(data);
  }
}
