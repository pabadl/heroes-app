import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HeroesDashboardComponent } from './heroes-dashboard/heroes-dashboard.component';

const heroesRoutes: Routes = [
    {path: '', component: HeroesDashboardComponent}
];

@NgModule({
    imports: [RouterModule.forChild(heroesRoutes)],
    exports: [RouterModule]
})
export class HeroesRoutesModule {}
