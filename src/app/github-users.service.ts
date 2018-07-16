import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubUsersService {

  constructor( private http: HttpClient ) {
   }

  url = 'https://api.github.com/users';

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.url);
  }
}
