import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private productos : any = []

  constructor(private http : HttpClient) { }
  //get productos método
  getProductos(){
    return this.http.get('http://localhost:1337/productos')
  }
  getProductosById(productoID : string){
    //busqueda de elemento por ID método
    return this.http.get('http://localhost:1337/productos' + productoID)
  }
  //delete productos métodoñ
  deleteProductos(productoID : string){
    return this.http.delete('http://localhost:1337/productos' + productoID)
  }
  //Agregar producto
  addProductos(nom: string, disp : boolean, imgURL: string, pre: number, com: string[] ){
    
    var datos = {
      nombre : nom,
      disponibilidad : disp,
      imagenURL : imgURL,
      precio : pre,
      comentarios : com
    }
    return this.http.post('http://localhost:1337/productos', datos)
  }

  updateProductos(productoID : string , nom: string, disp : boolean, imgURL: string, pre: number, com: string[]){
    
    var datos = {
      nombre : nom,
      disponibilidad : disp,
      imagenURL : imgURL,
      precio : pre,
      comentarios : com[0]
    }
  return this.http.post('http://localhost:1337/productos' + productoID, datos)
  }

}



