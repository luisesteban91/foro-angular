import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable, from } from 'rxjs'
import { global } from './global'

@Injectable()
export class CoomentService{
    public url: string;

    constructor(private _http: HttpClient){
        this.url = global.url;
    }

    addComment(token, comment, topicId):Observable<any>{
        let params = JSON.stringify(comment);
        let headers = new HttpHeaders().set('Content-Type', 'application/json')
                                        .set('Authorization', token);

        return this._http.post(this.url+'comment/topic/'+topicId, params, {headers: headers});
    }

    deleteTopic(token, topicId, commentId):Observable<any>{
        let headers = new HttpHeaders().set('Content-Type', 'application/json')
                                      .set('Authorization', token);

        return this._http.delete(this.url+'comment/'+topicId+'/'+commentId, {headers:headers});
    }
}