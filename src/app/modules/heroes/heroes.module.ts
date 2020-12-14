import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesDashboardComponent } from './heroes-dashboard/heroes-dashboard.component';
import { HeroesRoutesModule } from './heroes.routes';
import { HeroDetailsComponent } from './hero-details/hero-details.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// AoT requires an exported function for factories
export function createTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http, 'src/assets/i18n/', '.json');
}

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
        HttpClientModule,
        FontAwesomeModule,
        TranslateModule.forChild({
            loader: {
                provide: TranslateLoader,
                useFactory: (createTranslateLoader),
                deps: [HttpClient]
            }
        })
    ],
})
export class HeroesModule {}