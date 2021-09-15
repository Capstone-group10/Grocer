import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from './employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(public http:HttpClient) { }

  changePassword(employee:Employee):Observable<any>{
    return this.http.put("http://localhost:9090/employee/changePassword",employee);
  }
}
