import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService} from '../services/data.service';
import { NavController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-show-complaint',
  templateUrl: './show-complaint.page.html',
  styleUrls: ['./show-complaint.page.scss'],
})
export class ShowComplaintPage implements OnInit {
  Complaints_Id: any;
  getComplaint: any;
  Complaint_Description:any;
  StatusResolved: any='Resolved';
  StatusUnResolved: any ='Pending';
  constructor(private activatedRoute: ActivatedRoute, private toastController: ToastController,private dataServices: DataService,private nav: NavController) { }

  ngOnInit() {
    
    this.Complaints_Id = this.activatedRoute.snapshot.paramMap.get("Complaints_Id");

    console.log(this.Complaints_Id);
          this.viewComplaint();
  }
  viewComplaint(){
    let Data = {}
    this.dataServices.postData('http://esmartpos-com.stackstaging.com/Complaintcrud/complaintsg/'+this.Complaints_Id,Data).subscribe(
      (res)=>{
        let data = res.json();
        this.getComplaint=data;
        console.log(JSON.stringify(this.getComplaint));
      }
    );
  }

  async presentToast2() {
    const toast = await this.toastController.create({
      message: 'Marked as Pending',
      
      duration: 4000
    });
    toast.present();
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Marked as resolved',
      color:'success',
      duration: 4000
    });
    toast.present();
  }

  resolved(){
    let Data = {
      Status:this.StatusResolved
    }
    this.dataServices.postData('http://esmartpos-com.stackstaging.com/complaintcrud/updateStatus/'+this.Complaints_Id,Data).subscribe(
      (res)=>{
        let data = res.json();
        this.getComplaint=data;
        console.log(JSON.stringify(this.getComplaint));
        this.presentToast();
      }
    );


  }
  unresolved(){
    let Data = {
      Status:this.StatusUnResolved
    }
    this.dataServices.postData('http://esmartpos-com.stackstaging.com/complaintcrud/updateStatus/'+this.Complaints_Id,Data).subscribe(
      (res)=>{
        let data = res.json();
        this.getComplaint=data;
        console.log(JSON.stringify(this.getComplaint));
        this.presentToast2();
      }
    );

  }
}
