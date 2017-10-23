import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//componets
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TypesTrainingComponent } from './types-training/types-training.component';
//services
import { ApiService } from './services/api.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    TypesTrainingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
