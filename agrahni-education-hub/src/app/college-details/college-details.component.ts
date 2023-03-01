import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { CollegeInquiryComponent } from '../models/college-inquiry/college-inquiry.component';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-college-details',
  templateUrl: './college-details.component.html',
  styleUrls: ['./college-details.component.css']
})
export class CollegeDetailsComponent implements OnInit {
  data: any;
  baseUrl: any;

  constructor( private auth: AuthService, private router: Router, private dialog: MatDialog ){
    this.baseUrl = this.auth.baseUrl
    this.auth.getapi('/college').subscribe((response:any)=>{
      this.data = response.data;
      console.log(response.data);
    })
  }
  ngOnInit(): void {
   
  }

  CollegeInquiryDialog(data:any) {

    const dialogRef = this.dialog.open(CollegeInquiryComponent, {
      width: '45%',
      data: {
        data: data,
        update: false,
        str: 'Add'
      }
    });
    // dialogRef.afterClosed().subscribe(result => {
    //   console.log(result, 'add college dialog yesss');
    //   if (result?.success) {
        // this.dataSource.data.unshift(result?.data);
        // this.dataSource._updateChangeSubscription();
        // this.toastr.success('Add', 'New college add successfully.');
      // }
    // })
  }

}
