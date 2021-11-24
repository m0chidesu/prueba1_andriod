import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';
declare var require : any

@Component({
  selector: 'app-agregar-productos',
  templateUrl: './agregar-productos.page.html',
  styleUrls: ['./agregar-productos.page.scss'],
})
export class AgregarProductosPage implements OnInit {
  
  private archivo: File = null 
  private marcas : any = []

  constructor(private serviceservice: ServiceService, private router : Router) { }

  ngOnInit() {
    this.serviceservice.getMarcas().subscribe(
      (resp) => {this.marcas = resp},
      (err) => console.log(err)
    )
  }

  /*capturarImg(event){

    console.log(event)  
    //Guardado de imagen en la variable archivo
      this.archivo = <File>event.target.files[0]
  
    }*/

  addProductos(nombre,disponible,precio,imagenURL,comentario, categoria, marca,escala ){
    /*const axios = require('axios')
    const STRAPI_BASE_URL = 'http://localhost:1337'
    const datos = new FormData()
    datos.append('files', this.archivo)
    datos.append('ref', 'Productos')
    datos.append('refId', '26')
    datos.append('field', 'imagen')

   axios.post(`${STRAPI_BASE_URL}/upload`, datos)*/
   
    var lista = []  
    if(comentario.value !== ""){ 
      lista.push(comentario.value)
    }else{
      lista = null;
    }

    this.serviceservice.agregarProductos(nombre.value, disponible.value , precio.value,imagenURL.value, comentario.value, categoria.value, marca.value,escala.value).subscribe(
      (resp) => {
      console.log("Se agregó? : ", resp)
        
        this.router.navigate(['/productos'])
      },
      (error) => {
        console.log("Error, lo que sucedió fue que: ", error)
      }
    );


  }

}
