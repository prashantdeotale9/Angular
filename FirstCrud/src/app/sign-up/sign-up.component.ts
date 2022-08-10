import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder, Validators} from '@angular/forms'
import { EmployeeServiceService } from '../service/employee-service.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  signValue !: FormGroup;
  constructor(private fb:FormBuilder,private http:HttpClient,private router:Router) { }

  ngOnInit(): void {
    this.signValue=this.fb.group({
     fullName :['',Validators.required],
     phone:['',Validators.required],
     email:['',Validators.required],
     password:['',Validators.required]

    });
  }

  signUPUser(){
    console.log("hello");
    console.log(this.signValue.value.fullName)
   this.http.post<any>("http://localhost:3000/signupUsers",this.signValue.value).subscribe(res=>{
        console.log(res);
        //this.signValue.reset();
        //this.router.navigate(['Login'])

   });


  }
}

