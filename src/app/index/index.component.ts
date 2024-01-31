// index.component.ts

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-index',
  template: `
    <div>
      <h1>INDEX</h1>
      <ul>
        <li><a routerLink="/child1">child1</a></li>
        <li><a routerLink="/child2">child2</a></li>
      </ul>
      <a href="mailto:nullepart@mozilla.org">Envoyer l'email nulle part</a>

      <!-- Ajout du span ici -->
      <div class="content">
        <span>{{ title }}</span>
      </div>
    </div>
  `,
  styles: [`
    div {
      border: 1px solid #ccc;
      padding: 10px;
      margin: 10px;
    }
  `]
})

export class IndexComponent {
  @Input() title: string; // Pas d'initialisation directe
  
  constructor() {
    this.title = ''; // Initialisation dans le constructeur
  }
}
