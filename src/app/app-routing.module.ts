import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlanDetailComponent } from './plan-detail/plan-detail.component';


const routes: Routes = [
  {
    path: 'exercise/:id',
    component: PlanDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
