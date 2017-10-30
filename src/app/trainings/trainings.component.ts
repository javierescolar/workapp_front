import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';
import { Training } from '../models/training';
import { Exercise } from '../models/exercise';
import { TypeTraining } from '../models/type-training';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-trainings',
  templateUrl: './trainings.component.html',
  styleUrls: ['./trainings.component.css']
})
export class TrainingsComponent implements OnInit {

  trainings: Observable<Training[]>;
  id: String;
  toggle: boolean;
  constructor(private apiService: ApiService,private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.toggle = false;
    this.activatedRoute.params.subscribe(params => this.id = params['id']);
    this.trainings = this.apiService.getTrainings(this.id);
  }

  toggleExercises(){
    this.toggle = (this.toggle)? false:true;
  }

}
