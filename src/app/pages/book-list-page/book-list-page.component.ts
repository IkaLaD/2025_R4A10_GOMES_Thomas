import { Component, inject, OnInit } from '@angular/core';
import { Book } from '../../models/book';
import { BooksApiService } from '../../services/book-api.service'; 
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-book-list-page',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './book-list-page.component.html',
  styleUrl: './book-list-page.component.css',
})
export class BookListPageComponent implements OnInit {
  private readonly bookService = inject(BooksApiService);
  books: Book[] = [];

  ngOnInit() {
    this.bookService.getAllBooks().subscribe((data: Book[]) => {
      this.books = data;
    });
  }
}
