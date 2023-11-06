import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isAuthenticated = ()=>{
    const token:any = localStorage.getItem('access_token'); // get token from local storage

    const payload = atob(token.split('.')[1]); // decode payload of token

    const parsedPayload = JSON.parse(payload); // convert payload into an Object

    return (!!token && parsedPayload.exp > Date.now() / 1000);
  }

  authenticated = signal(this.isAuthenticated());
}
