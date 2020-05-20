import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, ToastController } from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { DataService } from '../service/data.service';
import { ReactiveFormsModule,FormGroup,FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {
  myform:FormGroup;
  display1:any=1;
  display2:any=0;
  myPhoto:any;
  Customer_Name:any;
  Password1:any;
  Password2:any;
  Password:any;
  Contact:any;
  Email:any;
  cDp: any;
  msg: string;
  

  constructor(private navCtrl: NavController,private camera: Camera,private dataServices: DataService,private toastController: ToastController) { 
    
   
  }

  ngOnInit() {
  }

  
  SignIn(){
    this.navCtrl.navigateForward('/home');
  }

  
  SignUp(){
    
      let data = {
      
      Customer_Name:this.Customer_Name,
      Password:this.Password,
      Contact:this.Contact,
      Email:this.Email,
      
      
    }
    this.dataServices.postData('http://esmartpos-com.stackstaging.com/customercrud/customer/',JSON.stringify(data)).subscribe(
      (res)=>{
        let data = res.json();
        console.log(data);
        
        this.msg = data.message;
        this.presentToast(); 
      },err=>{
        alert(JSON.stringify(err));
        alert(data);

      }
      );
      
  }
  async presentToast() {
    const toast = await this.toastController.create({
      message: this.msg,
      color:'success',
      duration: 4000
    });
    toast.present();
  }
  }

