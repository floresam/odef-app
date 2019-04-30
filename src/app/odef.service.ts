import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Odef } from './odef';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ODEFS } from './mock-odef';
import { MessageService } from './message.service';
import { environment } from './../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OdefService {
  getOdefs(): Observable<Odef[]> {
    return this.http.get<Odef[]>(this.odefUrl)
      .pipe(
        tap(_ => this.log('fetched odefs')),
        catchError(this.handleError('getOdefs', []))
      );
  }
  getOdef(id: string, type: string): Observable<Odef> {
    const url = `${this.odefUrl}/${type}/${id}`;
    this.messageService.add('ODefService: fetched elements');
    return this.http.get<Odef>(url).pipe(
        tap(_ => this.log(`fetched odef id=${id}`)),
        catchError(this.handleError<Odef>(`getOdef id=${id}, type=${type}`))
      );
  }

  searchOdef(query: string): Observable<Odef[]> {
    if(!query.trim()) {
      // if not search term, return empty odef array.
      return of([]);
    }
    const url = `${this.odefUrl}/search?term=${query}`;
    this.messageService.add(`ODefService: Querying for ${query}`);
    return this.http.get<Odef[]>(url).pipe(
    tap(_ => this.log(`found odefs matching "${query}"`)),
    catchError(this.handleError<Odef[]>('searchOdef', []))
    );
  }
  private log(message: string) {
    this.messageService.add('HeroService: ${message}');
  }
  //private odefUrl = 'http://localhost:3000/odef';
  private odefUrl = environment.odefUrl;
  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { 
        console.log(environment.odefUrl);
    }
}
