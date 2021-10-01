import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from '../service.service';
import { Producto } from './producto.model';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-detalle-productos',
  templateUrl: './detalle-productos.page.html',
  styleUrls: ['./detalle-productos.page.scss'],
})
export class DetalleProductosPage implements OnInit {

  datos : Producto 
  constructor(private  activatedRoute : ActivatedRoute, private productosServicio : ServiceService, private router : Router, private alertController : AlertController) { }

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
  async delete(){
    //test en consola (unused)

    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirme',
      message: '<strong>¿Seguro que quiere elminar este produto?</strong>',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
          }
        }, {
          text: 'Eliminar',
          handler: () => {
            this.productosServicio.deleteProductos(this.datos.id)
            this.router.navigate(['/productos'])
            console.log("Eliminado pass")

          }
        }
      ]

    });
    await alert.present();
  }
}
