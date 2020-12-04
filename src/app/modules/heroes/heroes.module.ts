import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesDashboardComponent } from './heroes-dashboard/heroes-dashboard.component';
import { HeroesRoutesModule } from './heroes.routes';
import { HeroeDetailComponent } from './heroe-details/heroe-details.component';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        HeroesDashboardComponent,
        HeroeDetailComponent
    ],   
    exports: [
        HeroesDashboardComponent,
        HeroeDetailComponent
    ],
    imports: [ 
        CommonModule,
        HeroesRoutesModule,
        RouterModule
    ],
})
export class HeroesModule {}