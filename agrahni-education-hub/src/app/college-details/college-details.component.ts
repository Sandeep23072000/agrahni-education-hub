import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-college-details',
  templateUrl: './college-details.component.html',
  styleUrls: ['./college-details.component.css']
})
export class CollegeDetailsComponent implements OnInit {
  [x: string]: any;

  constructor(private http: HttpClient){
    this.http.get('http://www.7timer.info/bin/api.pl?lon=113.17&lat=23.09&product=astro&output=json').subscribe(response=>{
    console.log(response);
    })
  }

  ngOnInit(): void {
   
  }

}
