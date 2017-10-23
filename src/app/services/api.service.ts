import { Injectable } from '@angular/core';

@Injectable()
export class ApiService {
  api_url = "http:localhost:3000/api/v1/";
  constructor() { }

  getTypesTraining(){
    return   [
      {
          "name":"Gimnasio",
          "description":"Prueba de datos",
          "image_link":"https://thumbs.dreamstime.com/b/icono-del-gimnasio-50358669.jpg"
      },
      {
          "name":"Calistenia",
          "description":"Prueba de datos 2",
          "image_link":"https://image.spreadshirtmedia.net/image-server/v1/mp/compositions/T812A1PA1667PT17X79Y60D138365788S16/views/1,width=300,height=300,appearanceId=1,backgroundColor=E8E8E8/noir-callisthenie-t-shirt-premium-homme.jpg"
      },
      {
          "name":"Running",
          "description":"Prueba de datos 3",
          "image_link":"https://previews.123rf.com/images/bitontawan02/bitontawan021412/bitontawan02141200004/35005457-icono-correr-Foto-de-archivo.jpg"
      }
    ];
  }
}
