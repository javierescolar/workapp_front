import {Exercise} from './exercise';
import {TypeTraining} from './type-training';

export class Training {
  private toggle: string;
  constructor(
              public _id:string,
              public type_training_id: TypeTraining,
              public name:string,
              public description:string,
              public image_link:string,
              public exercises: Array<Exercise>
            ) {
              this.toggle = "hola";
  }

  public getToggle() {
    return this.toggle;
  }

}
