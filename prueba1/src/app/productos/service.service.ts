import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private productos = [{
    id : '1',
    nombre : 'Marraqueta',
    imagenURL : "https://t2.rg.ltmcdn.com/es/images/6/6/7/img_marraquetas_chilenas_11766_orig.jpg",
    comentarios : ['Marraqueta, crujiente xD']
  },
  {
    id : '2',
    nombre : 'Pastel Selva Negra',
    imagenURL : "https://d1kxxrc2vqy8oa.cloudfront.net/wp-content/uploads/2021/01/18204057/RFB-1910-1-tortadeselvanegra.jpg",
    comentarios : ['Un pastel para los más golosos, Hecha con ingredientes naturales']
  },
  {
    id: '3',
    nombre : 'Pie de Limon',
    imagenURL : "https://www.elmundoeats.com/wp-content/uploads/2017/10/Lemon-Meringue-Pie-2.jpg",
    comentarios : ['Una tarta con relleno de limón dulce y agrio, Apto para reconciliaciones']
  },
  {
    id : '4',
    nombre : 'Dobladitas',
    imagenURL : 'https://img-global.cpcdn.com/recipes/be91c61e0a03e7f3/1200x630cq70/photo.jpg',
    comentarios : ['¿Que mejor que una doblada con mantequilla?, Nah, el dueño lo prefiere con queso :3'] 
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
  deleteProductos(productoID){
    this.productos = this.productos.filter(serv => {
      return serv.id !== productoID
    })
  }
}
