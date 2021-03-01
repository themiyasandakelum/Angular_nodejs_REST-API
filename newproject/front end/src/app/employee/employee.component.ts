import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../shared/employee.service'

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  providers:[EmployeeService]
})

export class EmployeeComponent implements OnInit {
  employee = {
    title:String,
    description: String,
    published: false
  };
  submitted = false;
  constructor(private employeeService:EmployeeService) { }

  ngOnInit(): void {
    }

  saveTutorial(): void {
    const data = {
      title: this.employee.title,
      description: this.employee.description
    };

    this.employeeService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  

  }


