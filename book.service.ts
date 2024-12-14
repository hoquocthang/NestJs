import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';


export interface Book {
    id: number;
    title: string;
    author: string;
    description: string;
    publishedYear: number;
    createdAt: Date;
    updatedAt: Date;
}
@Injectable()
export class BookService {
    private books: Book[] = [
    {id: 1,
    title: 'hay',
    author: 'thang',
    description: 'vui',
    publishedYear: 2024,
    createdAt: new Date(),
    updatedAt: new Date()
    }
    ];
    getBooks() {
        return this.books
    }
    createBook(body: CreateBookDto) {
        const newBooks: Book = {
            id: Date.now(),
            ...body,
            createdAt: new Date(),
            updatedAt: new Date()


        }
        this.books.push(newBooks);
        return newBooks;
    }
}
