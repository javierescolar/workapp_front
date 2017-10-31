import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TypesTrainingCreateComponent } from './types-training-create/types-training-create.component';
import { TypesTrainingEditComponent } from './types-training-edit/types-training-edit.component';
import { TrainingsComponent } from './trainings/trainings.component';
import { ExerciseComponent } from './exercise/exercise.component';

const appRoutes: Routes = [
  {path: '', redirectTo:'/dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'dashboard/types_training/create', component: TypesTrainingCreateComponent},
  {path: 'dashboard/types_training/edit/:id', component: TypesTrainingEditComponent},
  {path: 'dashboard/types_training/:id/trainings', component: TrainingsComponent},
  {path: 'dashboard/types_training/:id/trainings/:exercise_ame', component: ExerciseComponent}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(appRoutes);
