import { Component, OnInit } from '@angular/core';
import {ToastController, NavController} from '@ionic/angular';
@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  constructor(public toastController: ToastController) { }

  ngOnInit() {
  }

  async showToastPass() {
    const toast = await this.toastController.create({
      message: 'Password Updated',
      duration: 2000
    });
    toast.present();
  }
}
