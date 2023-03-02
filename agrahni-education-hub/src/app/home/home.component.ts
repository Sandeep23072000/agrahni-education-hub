import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  bannerdata: any;
  Igallerydata: any;
  reviewdata: any;
  newsdata: any;
  baseUrl: any;
  
  constructor(private auth: AuthService) {
    this.baseUrl = this.auth.baseUrl;
    this.ShowBanner();
    this.ShowImgGallery();
    // this.ShowNews();
    this.ShowReview();
  }

  ngOnInit(): void {

  }
  ShowBanner() {
    this.auth.getapi('/banner').subscribe(res => {
      console.log(res, 'api ressssssssssss');
      this.bannerdata = res.data;
    }
    )
  }
  ShowImgGallery() {
    this.auth.getapi('/gallery').subscribe(res => {
      console.log(res, 'api ressssssssssss');
      this.Igallerydata = res.data;
    }
    )
  }
  ShowReview() {
    this.auth.getapi('/review').subscribe(res => {
      console.log(res, 'api ressssssssssss');
      this.reviewdata = res.data;
    }
    )
  }
  ShowNews() {
    this.auth.getapi('/news').subscribe(res => {
      console.log(res, 'api ressssssssssss');
      this.newsdata = res.data;
    }
    )
  }

}
