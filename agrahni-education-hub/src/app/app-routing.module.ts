import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountDetailsComponent } from './account-details/account-details.component';
import { CollegeDetailsComponent } from './college-details/college-details.component';
import { ContactusComponent } from './contactus/contactus.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'college-details', component: CollegeDetailsComponent},
  {path: 'course-details', component: CourseDetailsComponent},
  {path: 'account-details', component: AccountDetailsComponent},
  {path: 'contact-us', component: ContactusComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
