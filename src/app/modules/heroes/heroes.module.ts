import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesDashboardComponent } from './heroes-dashboard/heroes-dashboard.component';
import { HeroesRoutesModule } from './heroes.routes';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [HeroesDashboardComponent],   
    exports: [HeroesDashboardComponent],
    imports: [ 
        CommonModule,
        HeroesRoutesModule,
        RouterModule
    ],
})
export class HeroesModule {}