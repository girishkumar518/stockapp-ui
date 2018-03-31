import { Injectable } from '@angular/core';
import { Stock } from "./stock";
import { Http, Response } from "@angular/http";
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch';
import { Observable } from "rxjs/Observable";
import { RequestOptions,Headers } from '@angular/http';

@Injectable()
export class StockService {

  private apiUrl = 'http://localhost:8080/payconiq/api/stocks/';

  constructor(private http: Http) {
  }

  findAll(): Observable<Stock[]>  {
    return this.http.get(this.apiUrl)
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  findById(id: number): Observable<Stock> {
    return this.http.get(this.apiUrl+"/"+id)
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  createStock(stock: any): Observable<Stock> {

    let header = new Headers({ 'Content-Type': 'application/json' });
  let options = new RequestOptions({ headers: header });

    return this.http
      .post(this.apiUrl, stock, options)
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  deleteStockById(id: number): Observable<boolean> {
    return this.http.delete(this.apiUrl+"/"+id)
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  updateStock(stock: Stock): Observable<Stock> {
    let header = new Headers({ 'Content-Type': 'application/json' });
  let options = new RequestOptions({ headers: header });

        return this.http
          .put(this.apiUrl+"/"+stock.id, stock, options)
          .map((res:Response) => res.json())
          .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

  }

}
