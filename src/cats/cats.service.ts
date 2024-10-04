import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-cat.dto';

@Injectable()
export class CatsService {
  private cats: CreatePostDto[] = [];

  create(cat: CreatePostDto): CreatePostDto {
    this.cats.push(cat);
    return cat;
  }

  findOne(id: number): CreatePostDto {    
    return this.cats.find((element) => element.id == id);
  }

  findAll(): CreatePostDto[] {    
    return this.cats;
  }

  deleteOne(id: number): CreatePostDto[] {        
    var foundedIndex = this.cats.findIndex((element) => element.id == id);
    if(foundedIndex != -1) {      
      this.cats = this.cats.filter((element) => element.id != this.cats[foundedIndex].id);      
    }

    return this.cats;    
  }

  updateOne(data: CreatePostDto): CreatePostDto[] {    
    var index = this.cats.findIndex((element) => element.id == data.id);
    if(index != null && index != -1) {
      this.cats[index] = data;
    }
    return this.cats;
  }
}
