import { AuthorsService } from './../authors.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {
  authors: any;
  constructor(public authorService: AuthorsService) { }

  ngOnInit() {
    return this.findAuthor();
  }

  findAuthor() {
    this.authors = this.authorService.getAuthors();
  }

}
