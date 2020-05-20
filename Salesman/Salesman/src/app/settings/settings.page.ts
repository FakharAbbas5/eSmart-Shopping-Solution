import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  Password: any;
  resonse: any;
  Salesman_Id: any=49;

  constructor(private dataService: DataService,private toastController: ToastController,) { }

  ngOnInit() {
  }
  ChangePassword(){
    
      let data = {
        Salesman_Id:this.Salesman_Id,
        Password:this.Password
        }
        this.dataService.postData('http://esmartpos-com.stackstaging.com/salesmancrud/setting',JSON.stringify(data)).subscribe(
              (res)=>{
                let data = res.json();
                this.resonse = data;
                console.log(this.resonse.message);
                this.presentToastOrder();
                
              }
            );
    }
    async presentToastOrder() {
      const toast = await this.toastController.create({
        message: this.resonse.message,
        color:'success',
        duration: 4000
      });
      toast.present();
    }
  }

