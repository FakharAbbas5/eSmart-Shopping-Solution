import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
baseUrl: any ='192.168.2.105';
  constructor(private http: Http) { }

  getData(url)
  {
    let headers = new Headers();
    headers.append('x-api-key', 'suneja@123');
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    //headers.append('Content-Type', 'application/json');

    return this.http.get(url,{headers:headers});
  }
  postData(url,data)
  {
    let headers = new Headers();
    headers.append('x-api-key', 'suneja@123');
    //headers.append('Content-Type', 'application/x-www-form-urlencoded');
    headers.append('Content-Type', 'application/json');
    return this.http.post(url,data,{headers:headers});
  }
  updateData(url, data)
  {
    let headers = new Headers();
    headers.append('x-api-key', 'suneja@123');
    headers.append('Content-Type', 'application/json');
    console.log(data);

    return this.http.put(url,data,{headers:headers});
  }
  deleteData(url)
  {
    let headers = new Headers();
    headers.append('x-api-key', 'suneja@123');
    headers.append('Content-Type', 'application/json');
    //headers.append('Content-Type', 'application/x-www-form-urlencoded');
    return this.http.delete(url,{headers:headers});

  }
}
