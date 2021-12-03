import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { async } from '@angular/core/testing';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ServiceService } from '../productos/service.service';
declare var require : any

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  private usuarios : any = [];
  private listafor : any= [];
  
  constructor(private router : Router, private alertController : AlertController,private servicio :  ServiceService
    ) { }

  ngOnInit() {

  }
  async login(form){
    var username = form.value["name"]
    var password = form.value["password"]
    if(username != '' && password != ''){

      const axios = require('axios')
      axios.post('http://localhost:1337/auth/local',{
        identifier : username,
        password : password
      })
      .then(response =>{
        //si fnuciona
        console.log('Funciona');
        console.log('User profile', response.data.user);
        
        this.router.navigate(['/productos'])
      })
      .catch(error =>{
        console.log('Error : ', error.response)
        
      });

    }else if(username == '' && password == '' ){
        const alert = await this.alertController.create({
          cssClass: 'my-custom-class',
          header: 'Error',
          message: 'Complete los datos',
          buttons: ['OK']
        });
    
        await alert.present();
    
        const { role } = await alert.onDidDismiss();
      
    }else if(form.value["name"] != username && form.value["password"] != password){
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'Error',
        message: 'Usuario o contraseña incorrecta',
        buttons: ['OK']
      });
  
      await alert.present();
  
      const { role } = await alert.onDidDismiss();
      
    }
     
  }
  redirectRegister(){
      console.log('redirect pass')
      this.router.navigate(['/register'])
  }
}
