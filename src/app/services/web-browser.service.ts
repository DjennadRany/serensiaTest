// web-browser.service.ts
import { Injectable } from '@angular/core';
import { IWebBrowser } from '../interfaces';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WebBrowserService implements IWebBrowser {
  constructor(private http: HttpClient) {}

  getHtml(url: string): Observable<string | null> {
    const absoluteUrl = `./assets/${url}`;

    return this.http.get(absoluteUrl, { responseType: 'text' })
      .pipe(
        catchError((error) => {
          console.error(`Erreur lors de la récupération du fichier HTML: ${error.message}`);
          return throwError(error);
        })
      );
  }
}