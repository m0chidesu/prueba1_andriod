import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-agregar-productos',
  templateUrl: './agregar-productos.page.html',
  styleUrls: ['./agregar-productos.page.scss'],
})
export class AgregarProductosPage implements OnInit {
  

  constructor(private serviceservice: ServiceService) { }

  ngOnInit() {
    this.serviceservice.addProductos;

   
  }

}
