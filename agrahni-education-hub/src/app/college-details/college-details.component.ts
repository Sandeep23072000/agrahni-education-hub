import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-college-details',
  templateUrl: './college-details.component.html',
  styleUrls: ['./college-details.component.css']
})
export class CollegeDetailsComponent implements OnInit {
  data: any;

  constructor(private http: HttpClient, private auth: AuthService ){
    this.auth.getapi('http://192.168.1.57:5000/api/v1/college').subscribe((response:any)=>{
      this.data = response.data;
      console.log(response.data);
    })
  }
  ngOnInit(): void {
   
  }

}
