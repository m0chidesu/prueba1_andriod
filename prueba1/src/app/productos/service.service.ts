import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private productos = [{
    id : '1',
    nombre : 'Marraqueta',
    imagenURL : "",
    comentarios : ['Marraqueta, crujiente xD']
  },
  {
    id : '2',
    nombre : 'Pastelito',
    imagenURL : "",
    comentarios : ""
  }
]

  constructor() { }
  //get productos
  getProductos(){
    return[...this.productos]
  }
  getProductosById(productoID : string){
    //busqueda de elemento por ID
    return{
    ...this.productos.find( serv => {
      return serv.id === productoID
    } )
    }
  }
}
