import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, from } from 'rxjs';// Observable-> poder obtener los datos devueltos por el api
import { User } from '../models/user';
import  { global } from '../services/global';

@Injectable() //decorador para injectar cuaquier propiedad en cualquier componente
export class UserService{
    public url:string;

    constructor(private _http: HttpClient){ //EL _ ES PARA INDICAR QUE ESTO ES UN SERVCIO
        this.url = global.url;
    }
    prueba(){
        return "Hola desde el servicio de angular";
    }

    REGISTER(user): Observable<any>{
        //converti el objeto del usaurio en string
        let params = JSON.stringify(user);

        //definir la cabezeras
        let headers = new HttpHeaders().set('Content-type', 'application/json');

        //Haacer la peticion ajax
        return this._http.post(this.url+'register', params, {headers: headers});

    }
}
