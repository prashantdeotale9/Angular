import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder}  from '@angular/forms'
import { EmployeeServiceService } from '../service/employee-service.service';
import { employeeModel } from './shared/employeeModel';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  formValues !:FormGroup;
  employeeObj:employeeModel=new employeeModel();
  constructor(private fb:FormBuilder,private service :EmployeeServiceService) { }

  
  ngOnInit() 
   {
    this.formValues=this.fb.group({
      firstName:[''],
      lastName :[''],
      email:[''],
      phone:[''],
      salary:['']

    });
    this.getEmployee();
   }
//Add method
 postEmployee()
 {
  this.employeeObj.firstName=this.formValues.value.firstName;
  this.employeeObj.lastName=this.formValues.value.lastName;
  this.employeeObj.email=this.formValues.value.email;
  this.employeeObj.phone=this.formValues.value.phone;
  this.employeeObj.salary=this.formValues.value.salary;
  console.log(this.formValues.value.firstName);
  this.service.postEmployeeInfo(this.employeeObj).subscribe(res=>{
      console.log(res);
      //closing pop up of form
      let ref=document.getElementById('cancel');
        ref?.click();
      //resetingg form values
      this.formValues.reset();

      this.getEmployee();

  });

 }
//Getting employee details
employess:any;
 getEmployee()
 {
 this.service.getEmployeeInfo().subscribe(res=>{
 console.log(res);
 this.employess=res;
 });
 }
 //updating employee
 updateEmployee(row:any)
 {
  this.openModal();
   this.employeeObj.id=row.id;
   this.formValues.controls['firstName'].setValue(row.firstName);
   this.formValues.controls['lastName'].setValue(row.lastName);
   this.formValues.controls['email'].setValue(row.email);
   this.formValues.controls['phone'].setValue(row.phone);
   
   this.formValues.controls['salary'].setValue(row.salary);
   
 }
 //send dataon server for updating
 updateEmployeDetail()
 {
  this.employeeObj.firstName=this.formValues.value.firstName;
  this.employeeObj.lastName=this.formValues.value.lastName;
  this.employeeObj.email=this.formValues.value.email;
  this.employeeObj.phone=this.formValues.value.phone;
  this.employeeObj.salary=this.formValues.value.salary;
  console.log(this.employeeObj.id+" "+this.employeeObj.firstName);
   this.service.updateEmployeeInfo(this.employeeObj,this.employeeObj.id).subscribe(res=>{
     console.log(res);
     let ref=document.getElementById('cancel');
     ref?.click();
      this.formValues.reset();
     this.getEmployee();
   });

 }
 //deleting employee detail
 deleteEmployee(row:any)
 {
  console.log(row.id);
   this.service.deleteEmployeeInfo(row.id).subscribe(x=>{
           console.log(x);
           this.getEmployee();
   });
 }
   //model pop up method
   display = "none";
openModal()
 {  
   this.display = "block";
   
  }
  //model pop up method
  onCloseHandled() 
  {
    this.display = "none";
  }

}
