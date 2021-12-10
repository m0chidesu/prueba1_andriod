import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private productos : any = []

  constructor(private http : HttpClient) { }

  getMarcas(){
    return this.http.get('https://app-maqueta-desconocida.herokuapp.com/Tipo-Productos')
  }
  //get productos método
  getProductos(){
    return this.http.get('https://app-maqueta-desconocida.herokuapp.com/Productos')
  }
  getProductosById(productoID : string){
    //busqueda de elemento por ID método
    return this.http.get('https://app-maqueta-desconocida.herokuapp.com/Productos/' + productoID)
  }
  //delete productos métodoñ
  deleteProductos(productoID : string){
    return this.http.delete('https://app-maqueta-desconocida.herokuapp.com/Productos/' + productoID)
  }
  //Agregar producto
  agregarProductos(nombre: string, disponible : boolean, precio: number, imagenURL: string ,comentarios: string, categoria : string, marca : string,escala : string){
    
    var datos = {
      'nombre' : nombre,
      'disponibilidad' : disponible ? true: false,
      'precio' : precio,
      'imagenURL' : imagenURL,
      'comentarios' : comentarios,
      'categoria' : categoria,
      'marca' : marca,
      'escala' : escala,
      
 
    }

   console.log(datos)

    return this.http.post('https://app-maqueta-desconocida.herokuapp.com/Productos', datos)
  }

  updateProductos(productoID : string , nom: string, disp : boolean, pre: number,imgURL : string, com: string, categ: string, marca: string, scale : string){
    
    var datos = {
      "nombre" : nom,
      "disponibilidad" : disp ? true: false,
      "precio" : pre,
      "imagenURL" : imgURL,
      "comentarios" : com,
      "categoria" : categ,
      "marca" : marca,
      "escala" : scale
    }
      
    console.log(datos)
  return this.http.put('https://app-maqueta-desconocida.herokuapp.com/Productos/' + productoID, datos)
  }

}



