import { Controller, Get } from '@nestjs/common';

@Controller('cats')
class CatsController {
  @Get('/all')
  findAll(): string {
    return 'All cats';
  }
}

export { CatsController };
