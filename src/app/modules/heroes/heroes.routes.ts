import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HeroesDashboardComponent } from './heroes-dashboard/heroes-dashboard.component';
import { HeroeDetailComponent } from './heroe-details/heroe-details.component';

const heroesRoutes: Routes = [
    { path: '', component: HeroesDashboardComponent },
    { path: ':id/details', component: HeroeDetailComponent },
];

@NgModule({
    imports: [RouterModule.forChild(heroesRoutes)],
    exports: [RouterModule]
})
export class HeroesRoutesModule {}
