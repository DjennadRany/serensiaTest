// app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="content">
      <app-index [title]="title"></app-index>
    </div>
  `,
})
export class AppComponent {
  title: string = 'serensia-project';
}
