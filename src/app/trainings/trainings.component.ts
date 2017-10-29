import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';
import { Training } from '../models/training';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-trainings',
  templateUrl: './trainings.component.html',
  styleUrls: ['./trainings.component.css']
})
export class TrainingsComponent implements OnInit {

  trainings:Observable<Training[]>;
  id: String;
  constructor(private apiService: ApiService,private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => this.id = params['id']);
    console.log("Obtenemos el id:" + this.id);
    this.trainings = this.apiService.getTrainings(this.id);
    console.log("obtenemos los objetos... "+ this.trainings);
    console.log(this.trainings);
  }

}
