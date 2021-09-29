import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-productos',
  templateUrl: './agregar-productos.page.html',
  styleUrls: ['./agregar-productos.page.scss'],
})
export class AgregarProductosPage implements OnInit {
  

  constructor(private serviceservice: ServiceService, private router : Router) { }

  ngOnInit() {
  }
  addProducto(nom,imgURL,pre,com){
    if(com.value !== ""){
      var lista = []
      lista.push(com.value)
    }else{
      lista = null;
    }
    this.serviceservice.addProductos(nom.value, imgURL.value, pre.value, com.lista);

    this.router.navigate(['/productos'])
  }

}
