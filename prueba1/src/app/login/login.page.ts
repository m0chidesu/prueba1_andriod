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
  
  constructor(private router : Router, private alertController : AlertController,private servicio :  ServiceService) { }

  ngOnInit() {
    this.servicio.getUsers().subscribe(
      (resp) =>{ this.usuarios = resp},
      (error) =>{console.log(error)}
    );

  }
  async login(form){
    var username = form.value["name"]
    var password = form.value["password"]

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

  }
  redirectRegister(){
      console.log('redirect pass')
      this.router.navigate(['/register'])
  }
}
