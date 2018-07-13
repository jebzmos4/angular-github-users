import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class GithubUsersService {

  constructor( private http: HttpClient ) {
   }

  url = 'https://api.github.com/users/';

  getUsers() {
    return this.http.get(this.url);
  }
}
