import { Component, ViewChild , OnInit } from '@angular/core';
import { StorageService, Item } from '../services/storage.service';
import { Platform, ToastController, IonList } from '@ionic/angular';
import { DataService } from '../service/data.service';
@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.page.html',
  styleUrls: ['./my-orders.page.scss'],
})
export class MyOrdersPage implements OnInit {
  items: Item[] = [];
 
  newItem: Item = <Item>{};
 
  @ViewChild('mylist')mylist: IonList;
  resonse: any;
  Orders: any;
  constructor(private dataService: DataService, private toastController: ToastController) {
    
  }

  ngOnInit() {
    this.myOrder();
  }

  // Helper
  async showToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }

myOrder(){
  let data = {
    
    }
    this.dataService.postData('http://esmartpos-com.stackstaging.com/orderdcrud/lastorder',data).subscribe(
          (res)=>{
            let data = res.json();
            this.resonse = data;
            console.log(this.resonse);
            this.Orders=this.resonse;
            
          }
        );

  }
}

