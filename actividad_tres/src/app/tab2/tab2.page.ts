import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Productos } from '../../assets/config/productos';
import { ProductosserviceService } from './productosservice.service';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  productos: Observable<Productos[]>;

  constructor(private prodService:  ProductosserviceService) {}

ngOnInit() {
this.productos =  this.prodService.getProductos();
 }

}
