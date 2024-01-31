// child1.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-child1',
  template: `
    <div>
      <h1>CHILD1</h1>
   
      <a routerLink="/index">index</a>
      <a routerLink="/child2">child2</a>
      <a href="mailto:ailleurs@mozilla.org">Envoyer l'email ailleurs</a>
      <a href="mailto:nullepart@mozilla.org">Envoyer l'email nulle part</a>
    </div>
  `,
})
export class Child1Component {}
