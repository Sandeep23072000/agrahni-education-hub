import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../service/auth.service';
import { CollegeInquiryComponent } from '../models/college-inquiry/college-inquiry.component';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {
  data: any;
  baseUrl: any;
  constructor(private auth: AuthService, private router: Router, private dialog: MatDialog) {
    this.baseUrl = this.auth.baseUrl
    this.auth.getapi('/course').subscribe((response: any) => {
      this.data = response.data;
      console.log(response.data);
    })
  }
  ngOnInit(): void {

  }

  CourseInquiryDialog(data: any): void {

    const dialogRef = this.dialog.open(CollegeInquiryComponent, {
      width: '45%',
      data: {
        data: data,
        update: false,
        str: 'Add'
      }
    });

  }
}