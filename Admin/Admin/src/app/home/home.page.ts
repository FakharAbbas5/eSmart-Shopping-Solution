import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
msg:any;
model:any = {}
  Password: any;
  Email: any;
  resonse: any;
  response: any;
  Admin_Password: any;
  Admin_Email: any;
  Admin_Name: any=[];
  Admin_Details: any;
  Admin_Id: string;
constructor(private dataService:DataService,private nav: NavController) { }

ngOnInit() {

}





validate(email,password){
  this.Admin_Email=email;
  this.Admin_Password=password;

let data = {
Admin_Email : this.Admin_Email,
Admin_Password : this.Admin_Password
}
this.dataService.postData('http://esmartpos-com.stackstaging.com/admincrud/login',JSON.stringify(data)).subscribe(
      (res)=>{
        let data = res.json();
        this.resonse = data;
        console.log(this.resonse);
        console.log(this.resonse.status);
        
        this.Admin_Details=this.resonse[0];
        console.log(this.Admin_Details);
        console.log(this.Admin_Details.Admin_Name);
        this.Admin_Id=this.Admin_Details.Admin_Id;
        var Admin_Id=this.Admin_Id;
        if(this.resonse.status == true){
          //this.nav.navigateForward('/homee/'+Admin_Id);
          window.location.replace("/homee");
         
        }
        else if (this.resonse.status != true) {
         
         this.msg=this.resonse;
          return this.msg;

          
        }
      }
    );
}

}
