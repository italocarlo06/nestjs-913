import { Injectable } from '@nestjs/common';
import { Cat } from './entidades/cats';

@Injectable()
class CatsService {
  private cats: Cat[] = [];

  findAll(): Cat[] {
    return this.cats;
  }

  create(cat: Cat): void {
    this.cats.push(cat);
  }
}

export { CatsService };
