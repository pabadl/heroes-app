import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeroesModule } from './modules/heroes/heroes.module';
import { AppRoutingModule } from './app-routing.module';
import { HeroesDashboardComponent } from './modules/heroes/heroes-dashboard/heroes-dashboard.component';
import { ServicesModule } from './core/services/services.module';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducers } from './store/app.reducers';
import { ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { HeroEffects } from './store/hero.effects';

@NgModule({
    declarations: [AppComponent],
    imports: [ 
        BrowserModule,
        CommonModule, 
        AppRoutingModule,
        ServicesModule,
        StoreModule.forRoot(reducers),
        StoreDevtoolsModule.instrument({
            maxAge: 25, // Retains last 25 states
        }),
        ReactiveFormsModule,
        EffectsModule.forRoot([HeroEffects])
    ],
    exports: [],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}