import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from "@angular/common/http";
import { map, filter } from "rxjs/operators";
import { HeroModel } from "../../../models/hero.model";

@Injectable({
    providedIn: 'root'
  })
export class HeroIdInterceptor implements HttpInterceptor {

    constructor() {}

    intercept(request: HttpRequest<any>, next: HttpHandler) {
        let idTemporal = 1;
        return next.handle(request).pipe(
            filter(event => event instanceof HttpResponse),
            map((event: HttpResponse<any>) => {         
                if(event.url === 'https://udem.herokuapp.com/heroes'){
                    event.body.forEach(hero => {
                        hero._id = idTemporal;
                        idTemporal = idTemporal + 1;                     
                    });
                    return event;
                }
                return event;
            })
        );
    }

    
}