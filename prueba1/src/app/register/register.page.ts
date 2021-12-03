import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var require : any

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }

  register(form){
  var username = form.value["name"]
  var email = form.value["email"]
  var password = form.value["password"]
  const axios = require('axios')
  axios.post('http://localhost:1337/auth/local/register', {
    username: username,
    email: email,
    password: password,
  })
  .then(response => {
    // Handle success.
    console.log('register pass');
    console.log('User profile', response.data.user);
    console.log('User token', response.data.jwt);
    this.router.navigate(['/login'])
    
  })
  .catch(error => {
    // Handle error.
    console.log('Error: ', error.response);
  });
}

}
