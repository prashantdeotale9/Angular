import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder ,Validator, Validators} from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginValue !:FormGroup;
  constructor(private fb:FormBuilder,private http:HttpClient,private router:Router) { }
  

  ngOnInit(): void {
    this.loginValue=this.fb.group({
       email:['',Validators.required ],
       password:['',Validators.required]
    });
  }
  login(){
    console.log(this.loginValue.value +" "+this.loginValue.value.email);
    this.http.post<any>("https://localhost:7013/api/User",this.loginValue.value).subscribe(res=>{
     console.log(res);
     
    /*const user=  res.find((a:any)=>{
        a.email=== this.loginValue.value.email && a.password===this.loginValue.value.password; */
        this.loginValue.reset();
        this.router.navigate(['Dashboard'])
      });
     
    

  }
  get registerFormControl() {
    return this.loginValue.controls;
  }

}
