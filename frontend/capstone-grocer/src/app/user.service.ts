import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../app/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public http:HttpClient) { }

  retrieveUserById(id: any): Observable<User[]> {
    return this.http.get<User[]>(`http://localhost:9090/user/retrieveUserById/${id}`)
  } 

}
