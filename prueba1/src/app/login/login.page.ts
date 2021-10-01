import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router : Router, private alertController : AlertController) { }

  ngOnInit() {
  }
  async login(form){
    var user = form.value["name"]
    var pass = form.value["password"]

    console.log(form.value) //para testeo (unused)
    if(user == "admin" && pass == "123"){
      localStorage.setItem("datosUser",user);
      
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'Bienvenido',
        message: 'Ha ingresado con éxito ' + user,
        buttons: ['Aceptar']
      });
  
      await alert.present();
  
      //Espera al cierre de la ventana
      const { role } = await alert.onDidDismiss();
      console.log('onDidDismiss resolved with role', role);
      
      
      //redirect a productos
      this.router.navigate(['/productos'])
      
    }else{
      console.log('Error')
    }
  }
}
