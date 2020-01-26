import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatSliderModule } from '@angular/material/slider';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PlanDetailComponent } from './plan-detail/plan-detail.component';
import { SemicolonlistPipe } from './semicolonlist.pipe';
import { PlanMasterComponent } from './plan-master/plan-master.component';
import { PlanSelectorComponent } from './plan-selector/plan-selector.component';


@NgModule({
  declarations: [
    AppComponent,
    PlanDetailComponent,
    SemicolonlistPipe,
    PlanMasterComponent,
    PlanSelectorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatListModule,
    MatToolbarModule,
    MatSidenavModule,
    MatSliderModule,
    MatButtonModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
