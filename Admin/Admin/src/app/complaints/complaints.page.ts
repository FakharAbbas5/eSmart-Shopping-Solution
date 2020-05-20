import { Component, OnInit } from '@angular/core';
import { DataService} from '../services/data.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-complaints',
  templateUrl: './complaints.page.html',
  styleUrls: ['./complaints.page.scss'],
})
export class ComplaintsPage implements OnInit {

  constructor(private dataServices: DataService,private nav: NavController) { }


  getComplaint: any;
  ngOnInit() {
    this.viewComplaint();
  }


  viewComplaint(){
    let Data = {

    }
    this.dataServices.postData('http://esmartpos-com.stackstaging.com/Complaintcrud/complaintsg',Data).subscribe(
      (res)=>{
        let data = res.json();
        this.getComplaint=data;
        console.log(JSON.stringify(this.getComplaint));
      }
    );
  }

  RedirectMeToComplaint(Complaints_Id){
    console.log(Complaints_Id);
    this.nav.navigateForward('/show-complaint/'+Complaints_Id);
  }
  

}
