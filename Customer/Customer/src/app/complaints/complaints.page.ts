import { Component, OnInit } from '@angular/core';
import {ToastController, NavController} from '@ionic/angular';
import { DataService} from '../service/data.service';
import {BarcodeScanner} from '@ionic-native/barcode-scanner/ngx';
@Component({
  selector: 'app-complaints',
  templateUrl: './complaints.page.html',
  styleUrls: ['./complaints.page.scss'],
})
export class ComplaintsPage implements OnInit {

    Complaints_Id:any;
    Customer_Name:any="Khubaib";
    Complaint_Type:any;
    Complaint_Description:any;
    Date:any="2019-05-10";
    Status:any="pending";
    getComplaint: any;


    constructor(public toastController: ToastController,public navCtrl: NavController,private dataService: DataService) { }

  ngOnInit() {
        
  }
  async showToast() {
    const toast = await this.toastController.create({
      message: 'Complaint Registered',
      duration: 2000
    });
    toast.present();
  }
  Register(){
      let data = {
          
          Customer_Name : this.Customer_Name,
          Complaint_Type : this.Complaint_Type,
          Complaint_Description : this.Complaint_Description,
          Date: this.Date,
          Status: this.Status,
      }

      console.log(data);

      this.dataService.postData('http://esmartpos-com.stackstaging.com/Complaintcrud/complaints',JSON.stringify(data)).subscribe(
          (res)=>{
              let data = res.json();
              
              console.log(JSON.stringify(data));
          }
      );
  }

    
    }







