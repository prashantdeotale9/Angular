import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import {HttpClient, HttpClientModule} from '@angular/common/http'
import { EmployeeServiceService } from './service/employee-service.service';
import { EmployeeComponent } from './employee/employee.component';


@NgModule({
  declarations: [
    AppComponent,
    
    EmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,ReactiveFormsModule,HttpClientModule
  ],
  providers: [EmployeeServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
