// test.interface.ts
import { IWebBrowser } from '../interfaces/web-browser.interface'; // Assurez-vous que le chemin est correct

export interface IAmTheTest {
  getSuggestions(term: string, choices: string[], numberOfSuggestions: number): string[];
  checkSirenValidity(siren: string): boolean;
  computeFullSiren(sirenWithoutControlNumber: string): string;
  getEmailsInPageAndChildPages(browser: IWebBrowser, url: string, maximumDepth: number): string[];
}
