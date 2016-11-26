import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import  "rxjs";

@Injectable()
export class PhpCrudApiService {
    private BASEURL:string;
    constructor(private _http:Http){

    }

    setBaseUr(baseUrl:string){
        this.BASEURL= baseUrl;
    }
    get(table:string, params:string){
        this._http.get(this.BASEURL+table+params).map(res=>{ res.json()});
    }
    put(table:string, obj:any){
        this._http.put(this.BASEURL+table,obj).map(res=>{ res.json()});
    }
    delete(table:string, id:string){
        this._http.delete(this.BASEURL+table+"\\"+id).map(res=>{ res.json()});
    }
    post(table:string, obj:any){
        this._http.post(this.BASEURL+table,obj).map(res=>{ res.json()});
    }
}