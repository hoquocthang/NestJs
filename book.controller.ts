import { Body, Controller, Get, Post } from '@nestjs/common';
import { BookService } from './book.service';
import { CreateBookDto } from './dto/create-book.dto';

@Controller('book')
export class BookController {
    constructor(private readonly bookService: BookService) {}
    @Get()
    getBooks() {
        return this.bookService.getBooks();
    }
    @Post()
    createBook(@Body() body: CreateBookDto) {
    console.log(body);
    return this.bookService.createBook(body);
    }
    
}
