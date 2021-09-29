import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from './service.service';
@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
})
export class ProductosPage implements OnInit {
  private productos = []
  private user = localStorage.getItem("datosUser")
  constructor(private servicioProductos: ServiceService, private router : Router) { }

  ngOnInit() {
    //obtener la lista
    this.productos = this.servicioProductos.getProductos();
  }
  ionViewWillEnter(){
    //Vista al iniciar la app
    this.productos = this.servicioProductos.getProductos();
  }
  redirectAgregar(){
    //chequeo de redireccion por consola
    console.log('redirect pass')
    //redireccion a agregar
    this.router.navigate(['/agregar-productos'])
  }
}
