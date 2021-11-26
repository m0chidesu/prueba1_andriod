import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
declare var require : any

@Component({
  selector: 'app-agregar-productos',
  templateUrl: './agregar-productos.page.html',
  styleUrls: ['./agregar-productos.page.scss'],
})
export class AgregarProductosPage implements OnInit {
  
  private archivo: File = null 
  private marcas : any = []

  constructor(private serviceservice: ServiceService, private router : Router, private alertController : AlertController) { }

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

  async addProductos(nombre,disponible,precio,imagenURL,comentario, categoria, marca,escala ){
   
    var lista = []  
    if(comentario.value !== ""){ 
      lista.push(comentario.value)
    }else{
      lista = null;
    }
   if(nombre.value.length>0 && marca.value !=null && categoria.value !=null && precio.value > 0){
    this.serviceservice.agregarProductos(nombre.value, disponible.checked , precio.value,imagenURL.value, comentario.value, categoria.value, marca.value,escala.value).subscribe(
      (resp) => {
      console.log("Se agregó? : ", resp)
        
        this.router.navigate(['/productos'])
      },
      (error) => {
        console.log("Error, lo que sucedió fue que: ", error)
        
      }
    );
   }else{
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'Error',
        message: 'Campos Incompletos',
        buttons: ['OK']
      });
  
      await alert.present();
  
      const { role } = await alert.onDidDismiss();
      console.log('onDidDismiss resolved with role', role);
    }
  
   }



  }


