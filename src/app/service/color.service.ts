import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Icolor } from "../interface/icolor";

@Injectable({
    providedIn:'root'
})
export class colorService{
 
    constructor(private httpclient:HttpClient){}

    getRandomColor():Observable<Icolor>{
        const url="https://random-data-api.com/api/color/random_color";
        
        return this.httpclient.get<Icolor>(url);
    }
}
