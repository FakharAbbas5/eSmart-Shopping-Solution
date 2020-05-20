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
this.dataService.postData('http://esmartpos-com.stackstaging.com/salesmancrud/login',JSON.stringify(data)).subscribe(
      (res)=>{
        let data = res.json();
        this.resonse = data;
        console.log(this.resonse);
        console.log(this.resonse.status);

        if(this.resonse.status == true){
         window.location.replace("/salesman-home");
         
        }
        else if (this.resonse.status != true) {
         
         this.msg=this.resonse;
          return this.msg;

          
        }
      }
    );
}

}
