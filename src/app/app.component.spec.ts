// app.component.spec.ts
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent, IndexComponent], 
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'serensia-project'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('serensia-project');
  });

  it(`should render the title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;

    // Trouver l'élément span de manière plus robuste
    const spanElement = compiled.querySelector('.content span');
    expect(spanElement).toBeTruthy();

    // Si l'élément existe, vérifier le texte qu'il contient
    if (spanElement) {
      expect(spanElement.textContent).toContain('serensia-project');
    }
  });

  it(`should render the IndexComponent`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;

    // Trouver l'élément de l'IndexComponent de manière plus robuste
    const indexComponentElement = compiled.querySelector('app-index');
    expect(indexComponentElement).toBeTruthy();

    // Vous pouvez également vérifier d'autres aspects de votre composant IndexComponent ici
  });
});
