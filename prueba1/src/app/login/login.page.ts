import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }
  login(form){
    var user = form.value["name"]
    var pass = form.value["password"]

    console.log(form.value) //para testeo (unused)
    if(user == "admin" && pass == "123"){
      //redirect a productos
      this.router.navigate(['/productos'])
    }else{
      console.log('Error')
    }
  }
}
