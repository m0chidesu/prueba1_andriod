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
  addProducto(nom,disp,imgURL,pre,com){
    var lista = []
    if(com.value !== ""){ 
      lista.push(com.value)
    }else{
      lista = null;
    }
    this.serviceservice.addProductos(nom.value, disp.value , imgURL.value, pre.value, lista).subscribe(
      (resp) => {
        console.log("Se agregó? : ", resp)
        this.router.navigate(['/productos'])
      },
      (error) => {
        console.log("Error: ", error)
      }
    );


  }

}
