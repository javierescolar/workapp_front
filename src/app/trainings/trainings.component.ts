import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';
import { Training } from '../models/training';
import { Exercise } from '../models/exercise';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-trainings',
  templateUrl: './trainings.component.html',
  styleUrls: ['./trainings.component.css']
})
export class TrainingsComponent implements OnInit {

  trainings: Observable<Training[]>;
  id: String;
  toggles = {};
  exercise:any;

  constructor(private apiService: ApiService,private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => this.id = params['id']);
    this.trainings = this.apiService.getTrainings(this.id);
  }

  toggleExercises(id) {
    if(this.toggles[id] != undefined){
      this.toggles[id] = (this.toggles[id])? false:true;
    } else {
      this.toggles[id] = true;
    }
  }

  selectedExercise(exercise){
    this.exercise = exercise;
    console.log(this.exercise);
  }

}
