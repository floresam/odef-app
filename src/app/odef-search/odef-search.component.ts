import { Component, OnInit, Input } from '@angular/core';

import { Observable, Subject } from 'rxjs';

import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';

import { Odef } from '../odef';
import { OdefService } from '../odef.service';

@Component({
  selector: 'odef-search',
  templateUrl: './odef-search.component.html',
  styleUrls: ['./odef-search.component.css']
})
export class OdefSearchComponent implements OnInit {
  odefs$: Observable<Odef[]>;
  private searchTerm = new Subject<string>();

  constructor(private odefService:OdefService) {}

  // push a search term into the observable stream
  search(term: string): void {
    this.searchTerm.next(term);
  }

  ngOnInit(): void {
    this.odefs$ = this.searchTerm.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),
      
      // ignore new term if same as pervious term
      distinctUntilChanged(),
    
      // switch to new search observable each time the term changes
      switchMap((term: string) => this.odefService.searchOdef(term)),
    );
  }
}
