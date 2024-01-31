// app-routing.module.ts
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';   // Vérifiez le chemin
import { Child1Component } from './child1.component';       // Vérifiez le chemin
import { Child2Component } from './child2.component';       // Vérifiez le chemin

const routes: Routes = [
  { path: 'index', component: IndexComponent },
  { path: 'child1', component: Child1Component },
  { path: 'child2', component: Child2Component },
  { path: '', redirectTo: '/index', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }