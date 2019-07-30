import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, from } from 'rxjs';// Observable-> poder obtener los datos devueltos por el api
import { User } from '../models/user';
import  { global } from '../services/global';

@Injectable() //decorador para injectar cuaquier propiedad en cualquier componente
export class UserService{
    public url:string;
    public identity
    public token

    constructor(private _http: HttpClient){ //EL _ ES PARA INDICAR QUE ESTO ES UN SERVCIO
        this.url = global.url;
    }
    prueba(){
        return "Hola desde el servicio de angular";
    }

    //PETICION POST PARA REGISTRO
    REGISTER(user): Observable<any>{
        //converti el objeto del usaurio en string
        let params = JSON.stringify(user);

        //definir la cabezeras
        let headers = new HttpHeaders().set('Content-type', 'application/json');

        //Haacer la peticion ajax
        return this._http.post(this.url+'register', params, {headers: headers});

    }

    //PETICION GET PARA  LOGUEO
    SIGNUP(user, gettoken = null):Observable<any>{
        
        //Conprobar si llega el gettoken
        if(gettoken != null){
            user.gettoken = gettoken
        }

        let params = JSON.stringify(user)
        let headers = new HttpHeaders().set('Content-Type', 'application/json')
        
        return this._http.post(this.url+'login', params, {headers: headers})
    }

    //METODO PARA OBETENER LA INDETIDAD DESDE EL LOCALSORAGE
    getIdentity():Observable<any>{
        let identity = JSON.parse(localStorage.getItem('identity'))

        if(identity && identity != null && identity != undefined && identity != 'undefined'){
            this.identity = identity;
        }else{
            this.identity = null;
        }

        return this.identity;
    }
    
    //METODO PARA OBETENER LA TOKEN DESDE EL LOCALSORAGE
    getTOKEN(){
        let token = localStorage.getItem('token')

        if(token && token != null && token != undefined && token != 'undefined'){
            this.token = token;
        }else{
            this.token = null;
        }

        return this.token;

    }

    //PETICION GET PARA ACTUALIZAR USAURIO
    UPDATE(user):Observable<any>{
        let params = JSON.stringify(user)
        let headers = new  HttpHeaders().set('Content-type', 'application/json')
                                        .set('Authorization', this.getTOKEN())

        return this._http.put(this.url+'user/update', params, {headers:headers});
    }
}
