import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WebrequestService {

  readonly ROOT_URL;

  constructor(private http: HttpClient) { 
    this.ROOT_URL = 'https://task-manager-api-znoa.onrender.com';
  }



//functions
  get(uri:string){
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('access_token')}`
    });

    const requestOptions = {
      headers: headers,
      withCredentials: true
    };

    return this.http.get(`${this.ROOT_URL}/${uri}`, requestOptions);
  }

  post(uri:string, payload:Object){
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('access_token')}`
    });

    const requestOptions = {
      headers: headers,
      withCredentials: true
    };
    return this.http.post(`${this.ROOT_URL}/${uri}`, payload,requestOptions);
  }

  patch(uri:string, payload:Object){
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('access_token')}`
    });
    return this.http.patch(`${this.ROOT_URL}/${uri}`, payload,{headers});
  }

  delete(uri:string){
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('access_token')}`
    });
    return this.http.delete(`${this.ROOT_URL}/${uri}`,{headers});
  }



}
