import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesDashboardComponent } from './heroes-dashboard/heroes-dashboard.component';
import { HeroesRoutesModule } from './heroes.routes';

@NgModule({
    declarations: [HeroesDashboardComponent],   
    exports: [HeroesDashboardComponent],
    imports: [ 
        CommonModule,
        HeroesRoutesModule
    ],
})
export class HeroesModule {}