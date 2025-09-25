import { BadRequestException, Injectable } from '@nestjs/common';
import { Cat } from './entidades/cats';
import { CreateCatDto } from './dtos/create-cat.dto';

@Injectable()
class CatsService {
  private cats: Cat[] = [];

  findAll(): Cat[] {
    return this.cats;
  }

  create(cat: CreateCatDto): Cat {
    //Verficar se o gato já existe
    const existCat = this.cats.find((c) => c.nome === cat.nome);

    if (existCat) {
      throw new BadRequestException('Gato já existe');
    }
    //Insere o gato no array
    this.cats.push(cat);
    return cat;
  }
}

export { CatsService };
