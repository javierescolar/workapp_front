import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';
import { TypeTraining } from '../models/type-training';

@Component({
  selector: 'app-types-training-edit',
  templateUrl: './types-training-edit.component.html',
  styleUrls: ['./types-training-edit.component.css']
})
export class TypesTrainingEditComponent implements OnInit {
  id:any;
  params: any;

  training = new TypeTraining('_id','name','description','image_link');

  constructor(private apiServices:ApiService,private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    this.params = this.activatedRoute.params.subscribe(params => this.id = params['id']);
    this.apiServices.getTypeTraining(this.id).subscribe(
      data => {
         console.log(data);
         this.training._id= data['_id'];
         this.training.name= data['name'];
         this.training.description= data['description'];
         this.training.image_link= data['image_link'];
        },
        error => console.log(<any>error));
        console.log("el objeto");
        console.log(this.training);
  }

}
