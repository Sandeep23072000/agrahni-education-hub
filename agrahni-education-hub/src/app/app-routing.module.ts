import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollegeDetailsComponent } from './college-details/college-details.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'college-details', component: CollegeDetailsComponent},
  {path: 'course-details', component: CourseDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
