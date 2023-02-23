import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
  contectForm: FormGroup;
  constructor(private fb: FormBuilder){
    this.contectForm = fb.group({
      name: ['', Validators.required],
      email: '',
      phone: ['', Validators.required],
      message: '',
    });
  }

  ngOnInit(): void {
    
  }

}
