import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable, from } from 'rxjs'
import { global } from './global'

@Injectable()
export class TopicService{
    public url: string;

    constructor(private _http: HttpClient){
        this.url = global.url;
    }

    prueba(){
        return "Hola"
    }

    addTopic(token, topic):Observable<any>{
        let params = JSON.stringify(topic);
        let headers = new HttpHeaders().set('Content-Type', 'application/json')
                                        .set('Authorization', token);

        return this._http.post(this.url+'topic', params, {headers: headers});
    }

    getTopicsByUser(userId):Observable<any>{
        let headers = new HttpHeaders().set('Content-Type', 'application/json')

        return this._http.get(this.url+'user-topics/'+userId, {headers:headers});
    }
}