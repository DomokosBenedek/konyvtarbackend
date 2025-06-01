import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class BookService {

  db: PrismaService;
  constructor(db: PrismaService) {
    this.db = db;
  }

  create(createBookDto: CreateBookDto) {
    return ;
  }

  async findAll() {
    return {data: await this.db.books.findMany()};
  }

  findOne(id: number) {
    return `This action returns a #${id} book`;
  }

  update(id: number, updateBookDto: UpdateBookDto) {
    return `This action updates a #${id} book`;
  }

  remove(id: number) {
    return `This action removes a #${id} book`;
  }
}
