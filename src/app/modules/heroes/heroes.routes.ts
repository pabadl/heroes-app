import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HeroesDashboardComponent } from './heroes-dashboard/heroes-dashboard.component';
import { HeroDetailsComponent } from './hero-details/hero-details.component';

const heroesRoutes: Routes = [
    { path: '', component: HeroesDashboardComponent },
    { path: ':id/details', component: HeroDetailsComponent },
];

@NgModule({
    imports: [RouterModule.forChild(heroesRoutes)],
    exports: [RouterModule]
})
export class HeroesRoutesModule {}
