import { PlanDetailComponent } from './plan-detail/plan-detail.component';
import { PlanMasterComponent } from './plan-master/plan-master.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlanSelectorComponent } from './plan-selector/plan-selector.component';



const routes: Routes = [
  {
    path: ':area',
    component: PlanMasterComponent,
    children: [
      {
        path: ':id',
        component: PlanDetailComponent
      }
    ]
  },
  {
    path: '',
    component: PlanSelectorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
