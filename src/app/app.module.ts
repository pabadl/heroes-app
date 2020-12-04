import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeroesModule } from './modules/heroes/heroes.module';
import { AppRoutingModule } from './app-routing.module';
import { HeroesDashboardComponent } from './modules/heroes/heroes-dashboard/heroes-dashboard.component';
import { ServicesModule } from './core/services/services.module';

@NgModule({
    declarations: [AppComponent],
    imports: [ 
        BrowserModule,
        CommonModule, 
        AppRoutingModule,
        ServicesModule
    ],
    exports: [],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}