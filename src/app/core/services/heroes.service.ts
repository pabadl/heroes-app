import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class HeroesService {
    private url = 'https://udem.herokuapp.com/heroes';

    constructor(private http: HttpClient) {}

    getHeroes() {
        return this.http.get(this.url);
    }
}