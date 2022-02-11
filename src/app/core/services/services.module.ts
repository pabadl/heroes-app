import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeroesService } from './heroes.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    providers: [HeroesService],
    imports: [
        CommonModule,
        HttpClientModule
      ]
})
export class ServicesModule {}