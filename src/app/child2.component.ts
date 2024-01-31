// child2.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-child2',
  template: `
    <div>
      <h1>CHILD2</h1>
      <a href="./index.html">index</a>
      <a href="mailto:loin@mozilla.org">Envoyer l'email loin</a>
      <a href="mailto:nullepart@mozilla.org">Envoyer l'email nulle part</a>
    </div>
  `,
})
export class Child2Component {}
