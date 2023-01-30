import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-compaint-order',
  templateUrl: './compaint-order.page.html',
  styleUrls: ['./compaint-order.page.scss'],
})
export class CompaintOrderPage implements OnInit {

  constructor(
    private alertController: AlertController
  ) {

  }

  ngOnInit() {
  }

  async onOrder() {
      const alert = await this.alertController.create({
        header: 'تم ارسال طلبك بنجاح',
      });
      await alert.present();
  }

}
