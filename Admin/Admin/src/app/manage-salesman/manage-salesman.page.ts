import { Component, OnInit } from '@angular/core';
import { DataService} from '../services/data.service';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-manage-salesman',
  templateUrl: './manage-salesman.page.html',
  styleUrls: ['./manage-salesman.page.scss'],
})
export class ManageSalesmanPage implements OnInit {
  http: any = 'localhost/C_I/salesmancrud/salesman';
  getSalesman:any;
  constructor(private dataServices: DataService,private nav: NavController) {
    this.pet="view";
  }
  pet: any;
Salesman_Id:any;
Salesman_Name: any;
Email: any;
Password: any;
Contact: any;
Salesman_Last_Login: any='2019-05-10 14:00:00';
Salesman_Join_Date: any='2019-07-11';
id: any;
  ngOnInit() {
          
         this.viewData();
         
         }
         viewData(){
           let Data= {}
          this.dataServices.postData('http://esmartpos-com.stackstaging.com/salesmancrud/salesmang',Data).subscribe(
            (res)=>{
              let data = res.json();
              this.getSalesman=data;
              console.log(JSON.stringify(this.getSalesman));
            }
          );
         }
         addSalesman() {
          let data = {
            Salesman_Id: this.Salesman_Id,
            Salesman_Name : this.Salesman_Name,
            Email : this.Email,
           Password : this.Password,
           Contact: this.Contact,
           Salesman_Join_Date: this.Salesman_Join_Date,
           Salesman_Last_Login: this.Salesman_Last_Login,
          
        }

        this.dataServices.postData('http://esmartpos-com.stackstaging.com/salesmancrud/salesman',JSON.stringify(data)).subscribe(
          (res)=>{
            let data = res.json();
            this.viewData();
            //this.getSalesman=data;
            console.log(JSON.stringify(data));
            this.viewData();
            this.Salesman_Id='',
            this.Salesman_Name='',
            this.Email='',
           this.Password='',
           this.Contact=''

          }
        );
        //this.dataServices.postData('C_I/salesmancrud/salesman',JSON.stringify(data));
  }
  updateSalesman(Salesman_Name,Salesman_Email,Salesman_Password){
    
      let data = {
        Salesman_Name : this.Salesman_Name,
        Email : this.Email,
        Password : this.Password
    }
    this.dataServices.postData('http://esmartpos-com.stackstaging.com/salesmancrud/salesmanp',JSON.stringify(data));
    this.viewData();
  }
  deleteSalesman(Salesman_Id){
    let Data = {}
    this.dataServices.postData('http://esmartpos-com.stackstaging.com/salesmancrud/salesmand/'+Salesman_Id,Data).subscribe(
    (res)=> {
      let data =res.json();
      this.viewData();
      console.log(JSON.stringify(data));
      this.viewData();
    }
    )
  }
  RedirectMe(){
    this.nav.navigateForward('/salesman2');
  }
  
  RedirectMeToUpdate(Salesman_Id){
    console.log(Salesman_Id);
    this.nav.navigateForward('/update-Salesman/'+Salesman_Id);
  }
  // getSalesman() {
  //   return this.dataServices.readSalesman();
  //   };
  // login() {
  // console.log("login")
  //     let response = this.dataServices.readSalesman();
  //     response.subscribe(data => {
  //       this.rest_data  = data;
  //       console.log("salesman list",this.rest_data);

  //     }, error => {


  //     });

  // }

}

