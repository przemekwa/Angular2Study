import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'

@Injectable()
export class HeaderServiceService {

WebPrimeApiUrl = "http://wro1706v/wbk2/WebPrimeApi";

  constructor(private http: Http) { }

getHeaderByAccount(serno: number)  {

console.log("getHeaderByAccount: " + serno);

return this.http.get(this.WebPrimeApiUrl + "/Common/Header/Account/" + serno)
              .map(res => res.json());

}     



}
