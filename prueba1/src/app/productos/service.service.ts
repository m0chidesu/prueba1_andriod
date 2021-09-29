import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  //lista de productos
  private productos = [{
    id : '1',
    nombre : 'Marraqueta',
    precio : 950,
    imagenURL : "https://t2.rg.ltmcdn.com/es/images/6/6/7/img_marraquetas_chilenas_11766_orig.jpg",
    comentarios : ['Marraqueta fresca y calientita', 'crujiente (que se esperaban de una rica marraqueta xD?)']
  },
  {
    id : '2',
    nombre : 'Pastel Selva Negra',
    imagenURL : "https://d1kxxrc2vqy8oa.cloudfront.net/wp-content/uploads/2021/01/18204057/RFB-1910-1-tortadeselvanegra.jpg",
    precio : 2550,
    comentarios : ['Un pastel para los más golosos', 'Hecha con ingredientes naturales']
  },
  {
    id: '3',
    nombre : 'Pie de Limon',
    imagenURL : "https://www.elmundoeats.com/wp-content/uploads/2017/10/Lemon-Meringue-Pie-2.jpg",
    precio : 1550,
    comentarios : ['Una tarta con relleno de limón dulce y agrio', 'Apto para reconciliaciones']
  },
  {
    id : '4',
    nombre : 'Dobladitas',
    imagenURL : 'https://img-global.cpcdn.com/recipes/be91c61e0a03e7f3/1200x630cq70/photo.jpg',
    precio : 1000 ,
    comentarios : ['¿Que mejor que una doblada con mantequilla?', 'Nah, el dueño las prefiere con queso :3'] 
  }
]

  constructor() { }
  //get productos método
  getProductos(){
    return[...this.productos]
  }
  getProductosById(productoID : string){
    //busqueda de elemento por ID método
    return{
    ...this.productos.find( serv => {
      return serv.id === productoID
    } )
    }
  }
  //delete productos métodoñ
  deleteProductos(productoID){
    this.productos = this.productos.filter(serv => {
      return serv.id !== productoID
    })
  }
  //Agregar producto
  addProductos(nom: string, imgURL: string, pre: number){
    this.productos.push(
      {
       id : this.productos.length + 1 + "",
       nombre : nom,

      }
    )

  }
}
