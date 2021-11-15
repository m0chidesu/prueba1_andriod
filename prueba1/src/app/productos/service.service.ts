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
    return this.http.get('http://localhost:1337/Productos')
  }
  getProductosById(productoID : string){
    //busqueda de elemento por ID método
    return this.http.get('http://localhost:1337/Productos/' + productoID)
  }
  //delete productos métodoñ
  deleteProductos(productoID : string){
    return this.http.delete('http://localhost:1337/Productos/' + productoID)
  }
  //Agregar producto
  agregarProductos(nombre: string, disponible : boolean, imagenURL: string , precio: number, comentarios: string[], categoria : string, escala : string){
    
    var datos = {
      "nombre" : nombre,
      "disponibilidad" : disponible,
      "imagenURL" : imagenURL,
      "precio" : precio,
      "comentarios" : comentarios[0],
      "categoria" : categoria,
      "escala" : escala
    }

   console.log(datos)

    return this.http.post('http://localhost:1337/Productos/', datos)
  }

  updateProductos(productoID : string , nom: string, disp : boolean, imgURL: string, pre: number, com: string[], categ: string, scale : string){
    
    var datos = {
      "nombre" : nom,
      "disponibilidad" : disp,
      "imagenURL" : imgURL,
      "precio" : pre,
      "comentarios" : com[0],
      "categoria" : categ,
      "escala" : scale
    }
  return this.http.put('http://localhost:1337/Productos/' + productoID, datos)
  }

}



