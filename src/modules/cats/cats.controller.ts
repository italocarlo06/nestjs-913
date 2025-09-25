import { Body, Controller, Get, Post } from '@nestjs/common';
import { CatsService } from './cats.service';
import { Cat } from './entidades/cats';
import { CreateCatDto } from './dtos/create-cat.dto';

@Controller('cats')
class CatsController {
  constructor(private readonly catsService: CatsService) {}
  @Get('/all')
  findAll(): Cat[] {
    return this.catsService.findAll();
  }

  @Post('/create')
  create(@Body() cat: CreateCatDto): Cat {
    return this.catsService.create(cat);
  }
}

export { CatsController };
