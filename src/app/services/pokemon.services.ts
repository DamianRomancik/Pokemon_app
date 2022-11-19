import { environment } from 'src/environments/environment';
import { Injectable } from "@angular/core";
import {HttpClient} from "@angular/common/http";
import { Observable } from "rxjs";

    export interface Result {
        name: string;
        url: string;
    }

    export interface ApiResult {
        count: number;
        next: string;
        previous?: any;
        results: Result[];
    }
    
    export interface Ability2 {
        name: string;
        url: string;
    }

    export interface Ability {
        ability: Ability2;
    }
    export interface Sprites {
        back_default: string;
        back_female?: any;
        back_shiny: string;
        back_shiny_female?: any;
        front_default: string;
        front_female?: any;
        front_shiny: string;
        front_shiny_female?: any;
    }
    
    export interface Stat {
        base_stat: number;
        effort: number;
        stat: Stat2;
    }
    export interface Stat2 {
        name: string;
        url: string;
    }

    export interface RootObject {
        abilities: Ability[];
        id: number;
        name: string;
        order: number;
        sprites: Sprites;
        stats: Stat[];
        weight: number;
    }
    
    
    
    







@Injectable({
    providedIn: 'root'
})
export class PokemonService {

    constructor(private http: HttpClient) { }
    
    getPokemon(limit): Observable<ApiResult> {
        return this.http.get<ApiResult>(`${environment.baseUrl}pokemon/?offset=${limit}&limit=20`);
    }
    getPokemonDetails(name: string) : Observable<RootObject>{
        return this.http.get<RootObject>(`${environment.baseUrl}pokemon/${name}`);
    }
    
}