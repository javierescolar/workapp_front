import { routes } from './app.routes';

//modulos
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

//services
import { ApiService } from './services/api.service';

//componets
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TypesTrainingComponent } from './types-training/types-training.component';
import { TypesTrainingCreateComponent } from './types-training-create/types-training-create.component';
import { TypesTrainingEditComponent } from './types-training-edit/types-training-edit.component';
import { TrainingsComponent } from './trainings/trainings.component';
import { ExerciseComponent } from './exercise/exercise.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    TypesTrainingComponent,
    TypesTrainingCreateComponent,
    TypesTrainingEditComponent,
    TrainingsComponent,
    ExerciseComponent
  ],
  imports: [
    routes,
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
