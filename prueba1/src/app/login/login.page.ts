import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ServiceService } from '../productos/service.service';

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
  login(form){
    var username = form.value["name"]
    var password = form.value["password"]

    this.usuarios.forEach(x => {
     
      if(username === x.username && password ===  x.password){
        localStorage.setItem("datosUser", JSON.stringify(username));
        localStorage.setItem("datosPass", JSON.stringify(password));
        
        this.router.navigate(['/productos'])
        
      }else{
        console.log('Error')
      }

    });



  }
}
