import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-update-salesman',
  templateUrl: './update-salesman.page.html',
  styleUrls: ['./update-salesman.page.scss'],
})
export class UpdateSalesmanPage implements OnInit {
  getSalesman:any;
  constructor(private dataServices: DataService,private activatedRoute: ActivatedRoute,private toastController: ToastController) {
    
  }
Salesman_Id:any;
Salesman_Name: any;
Email: any;
Password: any;
Contact: any;
Salesman_Last_Login: any='2019-07-11 14:00:00';
Salesman_Join_Date: any='2019-05-10';
id: any;

  ngOnInit() {
    this.Salesman_Id = this.activatedRoute.snapshot.paramMap.get("Salesman_Id");

    console.log(this.Salesman_Id);
        

         this.viewData();
         
         }
         viewData(){
          let Data = {}
          this.dataServices.postData('http://esmartpos-com.stackstaging.com/salesmancrud/salesmang',Data).subscribe(
            (res)=>{
              let data = res.json();
              this.getSalesman=data;
              console.log(JSON.stringify(this.getSalesman));
              this.viewData();
              this.Salesman_Id='',
              this.Salesman_Name='',
              this.Email='',
             this.Password='',
             this.Contact=''
            }
          );
         }
         UpdateSalesman() {
          let data = {
            Salesman_Id: this.Salesman_Id,
            Salesman_Name : this.Salesman_Name,
            Email : this.Email,
            Password : this.Password,
            Contact: this.Contact,
            Salesman_Join_Date: this.Salesman_Join_Date,
            Salesman_Last_Login: this.Salesman_Last_Login,
        
        }

        let adata = new FormData();
        //adata.append('Salesman_Id',this.Salesman_Id);
        //a.append('Salesman_Name',this.Salesman_Name);
        //a.append('Email',this.Email);
        //a.append('Password',this.Password); 
       // a.append('Contact',this.Contact);
        //a.append('Salesman_Join_Date',this.Salesman_Join_Date);
        //a.append('Salesman_Last_Login',this.Salesman_Last_Login);
        //console.log(data);
        this.dataServices.postData('http://esmartpos-com.stackstaging.com/salesmancrud/salesmanp',JSON.stringify(data)).subscribe(
          (res)=>{
            let data = res.json();
            //this.getSalesman=data;
            console.log(JSON.stringify(data));
            this.presentToast();

            window.location.replace("/manage-salesman");

          }
        );
  }
  async presentToast() {
    const toast = await this.toastController.create({
      message: 'data.message',
      color:'success',
      duration: 4000
    });
    toast.present();
  }
}
