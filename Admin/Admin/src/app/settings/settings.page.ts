import { Component, OnInit } from '@angular/core';
import {ToastController, NavController} from '@ionic/angular';
import { DataService} from '../services/data.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  data=[];
  constructor(public toastController: ToastController,public service:DataService) { }

  ngOnInit() {
    this.service.getData('C_I/salesmancrud/salesman').subscribe(
      res=>{
        this.data = res.json();
        console.log(this.data);
      }
    );
  }
  async showToastPass() {
    const toast = await this.toastController.create({
      message: 'Password Updated',
      duration: 3000
    });
    toast.present();
  }

}
