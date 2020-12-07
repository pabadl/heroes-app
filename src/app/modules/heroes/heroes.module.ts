import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesDashboardComponent } from './heroes-dashboard/heroes-dashboard.component';
import { HeroesRoutesModule } from './heroes.routes';
import { HeroDetailsComponent } from './hero-details/hero-details.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        HeroesDashboardComponent,
        HeroDetailsComponent
    ],   
    exports: [
        HeroesDashboardComponent,
        HeroDetailsComponent
    ],
    imports: [ 
        CommonModule,
        HeroesRoutesModule,
        RouterModule,
        ReactiveFormsModule,
    ],
})
export class HeroesModule {}