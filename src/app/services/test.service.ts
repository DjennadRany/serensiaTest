// test.service.ts
import { Injectable } from '@angular/core';
import { IAmTheTest, IWebBrowser } from '../interfaces';
import { Observable, forkJoin, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TestService implements IAmTheTest {
  // ... (votre code existant)

  getEmailsInPageAndChildPages(browser: IWebBrowser, url: string, maximumDepth: number): Observable<string[]> {
    const visitedUrls = new Set<string>();

    return this.crawlPageAndChildPages(browser, url, maximumDepth, visitedUrls)
      .pipe(
        map(emails => Array.from(new Set(emails))) // Supprimer les doublons
      );
  }

  private crawlPageAndChildPages(
    browser: IWebBrowser,
    currentUrl: string,
    depth: number,
    visitedUrls: Set<string>,
    emails: string[] = []
  ): Observable<string[]> {
    if (depth === 0 || visitedUrls.has(currentUrl)) {
      return of(emails);
    }
  
    visitedUrls.add(currentUrl);
  
    return browser.getHtml(currentUrl)
      .pipe(
        map(html => {
          if (html) {
            const emailRegex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g;
            const matches = html.match(emailRegex);
  
            if (matches) {
              emails.push(...matches);
            }
  
            // Trouver et suivre les liens dans la page
            const linkRegex = /<a\s+(?:[^>]*?\s+)?href=([^\s>]+)[^>]*?>/g;
            const linkMatches = html.match(linkRegex);
  
            if (linkMatches) {
              const observables = linkMatches.map(match => {
                const hrefMatch = /href=["'](.*?)["']/g.exec(match);
                if (hrefMatch) {
                  const href = hrefMatch[1];
                  const absoluteUrl = new URL(href, currentUrl).toString();
                  return this.crawlPageAndChildPages(browser, absoluteUrl, depth - 1, visitedUrls, emails);
                } else {
                  return of(emails);
                }
              });
  
              // Utiliser forkJoin pour attendre que toutes les pages soient crawleés
              return forkJoin(observables)
                .pipe(
                  map(results => {
                    results.forEach(result => emails.push(...result));
                    // Supprimer les doublons dans les emails
                    return Array.from(new Set(emails));
                  })
                );
            }
          }
  
          return emails;
        })
      );
  }
  
}