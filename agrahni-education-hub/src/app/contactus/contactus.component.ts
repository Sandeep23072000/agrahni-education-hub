import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
  is_submit: boolean = false;
  error: string = '';
  contactForm = this.fb.group({
    name: ['', Validators.required],
    email: '',
    phoneno: ['', Validators.required],
    message: '',
  });
  constructor(private fb: FormBuilder, private auth: AuthService) {
  }

  ngOnInit(): void {

  }
  get uc() { return this.contactForm.controls; };


  contactFormSubmit() {
    this.is_submit = true;
    console.log(this.contactForm.value);


    this.auth.postAPI('/contact/add', this.contactForm.value).subscribe((res) => {
      console.log(res);

      if (res?.success) {
        this.error = '';
      }
    }, (err) => {
      if (!err.error?.success) {
        this.error = err.error?.msg;
      }
    })
  }
}
