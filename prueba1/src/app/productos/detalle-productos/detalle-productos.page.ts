import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from '../service.service';
import { Producto } from './producto.model';

@Component({
  selector: 'app-detalle-productos',
  templateUrl: './detalle-productos.page.html',
  styleUrls: ['./detalle-productos.page.scss'],
})
export class DetalleProductosPage implements OnInit {

  datos : Producto 
  constructor(private  activatedRoute : ActivatedRoute, private productosServicio : ServiceService, private router : Router) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paraMap =>{
      //valor de id en la url
      const valor = paraMap.get('prodID')
      //test de busqueda de producto (unused)
      console.log("id del prod: "+valor)
      //llamada del servicio con entrega de id
      this.datos = this.productosServicio.getProductosById(valor)

    })
  }

  //metodo delete
  delete(){
    //test en consola (unused)
    console.log("Eliminado pass")
    this.productosServicio.deleteProductos(this.datos.id)
    this.router.navigate(['/productos'])
  }
  
}
