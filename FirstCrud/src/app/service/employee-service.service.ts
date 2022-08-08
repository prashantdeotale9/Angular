import { Injectable } from '@angular/core';
import {HttpClient}  from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  constructor(private http:HttpClient) { }

  postEmployeeInfo(data:any) :Observable<any>
  {
   return this.http.post("http://localhost:3000/posts",data).pipe();
  }
  
  getEmployeeInfo():Observable<any>
  {
    return this.http.get("http://localhost:3000/posts");
  }
  updateEmployeeInfo(employeeObj:any,id:number):Observable<any>
  {
         return this.http.put("http://localhost:3000/posts/"+id,employeeObj).pipe();
  }
  deleteEmployeeInfo(id:number):Observable<any>
  {
    return this.http.delete("http://localhost:3000/posts/"+id).pipe();
  }
}
