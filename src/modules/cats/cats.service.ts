import { Injectable } from '@nestjs/common';

@Injectable()
class CatsService {
  findAll(): string {
    return 'Return All cats';
  }
}

export { CatsService };
