import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
})
export class HistoryPage implements OnInit {
  Salesman_Name: any='Khubaib';
  resonse: any;
  Orders: any;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.viewOrderDetails();
  }


  viewOrderDetails(){
    let data = {
      Salesman_Name:this.Salesman_Name
      }
      this.dataService.postData('http://esmartpos-com.stackstaging.com/salesmancrud/totalprocessed',JSON.stringify(data)).subscribe(
            (res)=>{
              let data = res.json();
              this.resonse = data;
              console.log(this.resonse);
              this.Orders=this.resonse;
              this.viewHistory();
            }
          );

    }
    viewHistory(){
      let data = {
        Salesman_Name:this.Salesman_Name
        }
        this.dataService.postData('http://esmartpos-com.stackstaging.com/salesmancrud/history',JSON.stringify(data)).subscribe(
              (res)=>{
                let data = res.json();
                this.resonse = data;
                console.log(this.resonse);
                console.log(this.resonse[0]);
                console.log(this.resonse[0].Salesman_Name);
                
              }
            );
    }
  }