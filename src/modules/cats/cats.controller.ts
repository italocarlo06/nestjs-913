import { Controller, Get, Post } from '@nestjs/common';
import { CatsService } from './cats.service';
import { Cat } from './entidades/cats';

@Controller('cats')
class CatsController {
  constructor(private readonly catsService: CatsService) {}
  @Get('/all')
  findAll(): Cat[] {
    return this.catsService.findAll();
  }

  @Post('/create')
  create(cat: Cat): void {
    this.catsService.create(cat);
  }
}

export { CatsController };
