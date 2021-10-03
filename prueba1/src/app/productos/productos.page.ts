import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from './service.service';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
})
export class ProductosPage implements OnInit {
  private productos = []
  private user = localStorage.getItem("datosUser")
  constructor(private servicioProductos: ServiceService, private router : Router, private alertController: AlertController) { }

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
  async redirectLogin(){
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: '¿Cerrar Sesion?',
      message: '<strong>¿Seguro que desea cerrar la sesión?</strong>',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
          }
        }, {
          text: 'Aceptar',
          handler: () => {
            this.router.navigate(['/login'])
          }
        }
      ]
    });

    await alert.present();
  }
}
