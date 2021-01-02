import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { NavbarComponent } from './navbar/navbar.component';
import { HeightFormatPipe } from './pipes/height-format.pipe';
import { IdFormatPipe } from './pipes/id-format.pipe';
import { GoToDashboardButtonComponent } from './go-to-dasboard-button/go-to-dashboard-button.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

// AoT requires an exported function for factories
export function createTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http, 'src/assets/i18n/', '.json');
}

@NgModule({
    declarations: [
        NavbarComponent,
        HeightFormatPipe,
        IdFormatPipe,
        GoToDashboardButtonComponent
    ],   
    exports: [
        NavbarComponent,
        HeightFormatPipe,
        IdFormatPipe,
        GoToDashboardButtonComponent
    ],
    imports: [ 
        CommonModule,
        RouterModule,
        FormsModule,
        HttpClientModule,
        TranslateModule.forChild({
            loader: {
                provide: TranslateLoader,
                useFactory: (createTranslateLoader),
                deps: [HttpClient]
            }
        })
    ],
})
export class SharedModule {}