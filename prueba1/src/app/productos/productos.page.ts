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
  private productos : any = []
  private user = localStorage.getItem("datosUser")
  constructor(private servicioProductos: ServiceService, private router : Router, private alertController: AlertController) { }

  ngOnInit() {
    //obtener la lista
    this.servicioProductos.getProductos().subscribe(
      (resp) => {
        this.productos = resp
        //console.log(resp[25].imagen.url)
        //(uso con axios) this.productos[this.productos.length-1].id + 1


      },
      (err) => {
        console.log(err)
      }
    )
  }
  ionViewWillEnter(){
    //Vista al iniciar la app
    this.servicioProductos.getProductos().subscribe(
      (resp) => {
        this.productos = resp
      },
      (err) => { console.log(err)

      }
    )
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
