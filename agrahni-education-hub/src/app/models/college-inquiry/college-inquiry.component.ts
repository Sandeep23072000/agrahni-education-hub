import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-college-inquiry',
  templateUrl: './college-inquiry.component.html',
  styleUrls: ['./college-inquiry.component.css']
})
export class CollegeInquiryComponent implements OnInit  {
  is_submit: boolean = false;
  error: string = '';
  CollegeInqForm = this.fb.group({
    name: ['', Validators.required],
    fathername: '',
    email: '',
    dob: '',
    mobileno: ['', Validators.required],
    alternateno: '',
    collegename: '',
    coursename: '',
    schoolname: '',
  });

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private auth: AuthService, private fb: FormBuilder, public dialog: MatDialog, public dialogRef: MatDialogRef<CollegeInquiryComponent>) {
    console.log(data, 'course dialooggggg');
    
      this.updateCollege(data);
    
  }

  ngOnInit(): void {

  }

  get uc() { return this.CollegeInqForm.controls; };
  updateCollege(data: any) {
    this.uc['collegename'].setValue(data.data?.name);
    this.uc['coursename'].setValue(data.data?.name);
  }

  CollegeInqFormSubmit() {
    this.is_submit = true;
    console.log(this.CollegeInqForm.value);
    this.auth.postAPI('/enquiry/add',this.CollegeInqForm.value).subscribe(res=> {
      console.log(res);
  });
  this.closeDialog()
}
  closeDialog() {
    this.dialogRef.close('res');
  }
}
