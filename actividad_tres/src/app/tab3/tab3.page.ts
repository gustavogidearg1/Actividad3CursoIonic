import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  contacto = {
    nombre: '',
    email: '',
    tel: '',
    consulta: ''
  };


  constructor(private toastController: ToastController) {}
  onSubmitTemplate(){

alert('Enviado');
  }

  async presentToast(position: 'top' | 'middle' | 'bottom') {
    const toast = await this.toastController.create({
      message: 'Mensaje Enviado' + '  ' + this.contacto.nombre,
      duration: 1500,
      position: position
    });

    await toast.present();
  }
}


