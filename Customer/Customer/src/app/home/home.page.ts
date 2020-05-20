import { Component } from '@angular/core';
import { DataService } from '../service/data.service';


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
  Customer_Details: any;
  Customer_Id: any;
constructor(private dataService:DataService) { }

ngOnInit() {

}





validate(email,password){
  this.Email=email;
  this.Password=password;

  console.log(this.Email,this.Password);
let data = {
Email : this.Email,
Password : this.Password
}

this.dataService.postData('http://esmartpos-com.stackstaging.com/customercrud/login',JSON.stringify(data)).subscribe(
      (res)=>{
        let data = res.json();
        this.resonse = data;
        console.log(this.resonse);
        console.log(this.resonse.status);
        this.Customer_Details=this.resonse[0];
        console.log(this.Customer_Details);
        console.log(this.Customer_Details.Customer_Name);
        this.Customer_Id=this.Customer_Details.Customer_Id;
        var Customer_Id=this.Customer_Id;
        
        if(this.resonse.status == true){
         window.location.replace("/customer-home");
         
        }
        else if (this.resonse.status != true) {
         
         this.msg=this.resonse;
          return this.msg;

          
        }
      }
    );
}

}
