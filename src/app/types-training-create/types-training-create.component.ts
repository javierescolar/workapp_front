import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-types-training-create',
  templateUrl: './types-training-create.component.html',
  styleUrls: ['./types-training-create.component.css']
})
export class TypesTrainingCreateComponent implements OnInit {

  constructor(private router:Router, private apiServices:ApiService) { }

  ngOnInit() {
  }

  createTypeTraining(type_training){
    this.apiServices.addTypeTraining(type_training)
      .subscribe(
        type_training_res => {
          console.log(type_training_res),
          this.router.navigate(['/dashboard']);
        },
        error => console.log(<any>error)
);
  }

}
