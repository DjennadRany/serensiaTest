
// app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component'; // Vérifiez le chemin
import { Child1Component } from './child1.component';      // Vérifiez le chemin
import { Child2Component } from './child2.component';      // Vérifiez le chemin

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    Child1Component,
    Child2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }