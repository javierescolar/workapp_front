import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-types-training',
  templateUrl: './types-training.component.html',
  styleUrls: ['./types-training.component.css']
})
export class TypesTrainingComponent implements OnInit {
  types_trainings:any;
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.types_trainings = this.apiService.getTypesTraining();
    console.log(this.types_trainings);
  }

}
