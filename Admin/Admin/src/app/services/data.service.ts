import { Injectable } from '@angular/core';
// import { HttpClient} from '@angular/common/http';
import {Http, Headers} from '@angular/http';
// import {Observable} from 'rxjs';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/catch';
// import 'rxjs/Rx';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  //baseUrl = 'http://192.168.43.228/';
  baseUrl = 'http://192.168.8.101/';

  constructor(private http: Http) { }
 //readSalesman(){
  //  return this.http.get(
    //    'http://localhost/C_I/salesmancrud/salesman'
    //
   ///  https://www.pizzaness.com/rest-api/index.php/menu/categories
    //var link = 'http://loclhost/C_I/salesman/5'
    //var data = JSON.stringify({ business_id:'81' });
    //return this.http.post(link, data)
    // .map((res: any) => res.json())
    // .catch((error: any) => Observable.throw(error.json().error || 'Server error'));

    //}
    getData(url)
    {
      let headers = new Headers();
      headers.append('x-api-key', 'suneja@123');
      headers.append('Content-Type', 'application/x-www-form-urlencoded');

        return this.http.get(url,{
          headers:headers
        });
    }
    postData(url, data)
    {
      let headers = new Headers();
      headers.append('x-api-key', 'suneja@123');
      //headers.append('Content-Type', 'application/x-www-form-urlencoded');
      headers.append('Content-Type', 'application/json');
        return this.http.post(url,data,{headers:headers});
    }
    post1Data(url){
      let headers = new Headers();
      headers.append('x-api-key', 'suneja@123');
      //headers.append('Content-Type', 'application/x-www-form-urlencoded');
      headers.append('Content-Type', 'application/json');
        return this.http.post(url,{headers:headers});
    }
    updateData(url, data)
    {
      let headers = new Headers();
      headers.append('x-api-key', 'suneja@123');
      headers.append('Content-Type', 'application/json');
      


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
    post1get(url){
      let headers = new Headers();
      headers.append('x-api-key','suneja@123');
      headers.append('Content-Type', 'application/json');
      return this.http.post(url,{headers:headers});
    }

}