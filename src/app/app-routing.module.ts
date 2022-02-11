import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroesDashboardComponent } from './modules/heroes/heroes-dashboard/heroes-dashboard.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: 'heroes',
    loadChildren: () => import('./modules/heroes/heroes.module').then(m => m.HeroesModule)
  },
  { path: '**', pathMatch: 'full', redirectTo: 'heroes' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }