import { Injectable } from '@angular/core';
import { Employee } from './employee.model';
import{HttpClient} from "@angular/common/http"
import{Observable}from 'rxjs';
//import 'rxjs/add/operator/map'
//import 'rxjs/add/operator/toPromise'
const baseURL = 'http://localhost:3000/employee';
@Injectable({
  providedIn: 'root'
})

export class EmployeeService {
  selectedEmployee : Employee;
  employees: Employee[];
  
  
  

  constructor(private http:HttpClient) { }
 
   getAll(): Observable<any> {
    return this.http.get (baseURL);
  }

  get(id): Observable<any> {
    return this.http.get(`${baseURL}/${id}`);
  }

  create(data): Observable<any> {
    return this.http.post(baseURL, data);
  }

  update(id, data): Observable<any> {
    return this.http.put(`${baseURL}/${id}`, data);
  }

  delete(id): Observable<any> {
    return this.http.delete(`${baseURL}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseURL);
  }

  findByTitle(title): Observable<any> {
    return this.http.get(`${baseURL}?title=${title}`);
  }

}
