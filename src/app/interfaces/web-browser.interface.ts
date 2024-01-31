// web-browser.interface.ts
export interface IWebBrowser {
    getHtml(url: string): string | null;
  }