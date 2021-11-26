import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-actualizar-productos',
  templateUrl: './actualizar-productos.page.html',
  styleUrls: ['./actualizar-productos.page.scss'],
})
export class ActualizarProductosPage implements OnInit {
  private producto : any = []
  private idproducto : any = []
  private marcas : any = []

  constructor(private ActRoute : ActivatedRoute, private router : Router, private http : HttpClient, private productoServicio : ServiceService) { }

  ngOnInit() {
    this.productoServicio.getMarcas().subscribe(
      (resp) => (this.marcas = resp),
      (err) => console.log(err)

    )
    
    this.ActRoute.paramMap.subscribe(paramMap =>{
      const valor = paramMap.get('prodID')
      this.idproducto = valor
      this.productoServicio.getProductosById(valor).subscribe(
        (resp : any) =>{
          this.producto = resp
        },
        (err) =>{
          console.log(err)
        }
      ) 
    })
  }
  actualizarProductos(nombre,disponibilidad,imagenURL,precio,comentarios,categoria,marca,escala){
    
    this.productoServicio.updateProductos(this.idproducto, nombre.value, disponibilidad.checked, precio.value, imagenURL.value,comentarios.value, categoria.value,marca.value, escala.value).subscribe(
      (resp) => {
        console.log(resp)
        this.router.navigate(['/productos'])
      },
      (err) =>{
        console.log(err)
      }
    )
  }

  

}
