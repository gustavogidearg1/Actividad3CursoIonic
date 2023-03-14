import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Productos } from '../../assets/config/productos';


@Injectable({
  providedIn: 'root'
})
export class ProductosserviceService {

constructor(private http: HttpClient) { }
getProductos(){
  return this.http.get<Productos[]>("./assets/config/productos.json");
}
}


