import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../service/data.service';
import { NavController, Platform, ToastController } from '@ionic/angular';
import { PrintProvider } from '../print.service';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial/ngx';
import { timer } from 'rxjs';
@Component({
  selector: 'app-billing-and-order2',
  templateUrl: './billing-and-order2.page.html',
  styleUrls: ['./billing-and-order2.page.scss'],
})
export class BillingAndOrder2Page implements OnInit {
  
  billing: string;
  Order_Id: any;
  getDetail: any;
  Salesman_Name: any="Fakhar Abbas";
  getSales: any;
  Detail1: any=[];
  Detail2: any=[];
  Detail3: any=[];
  Detail4: any=[];
  Detail5: any=[];
  Detail6: any=[];
  Detail7: any=[];
  Detail8: any=[];
  Detail9: any=[];
  Detail10: any=[];
  
  Order_Date_Now: any = new Date();
  Order_Year:any = this.Order_Date_Now.getFullYear();
  Order_Month:any = this.Order_Date_Now.getMonth();
  Month:any=['01','02','03','04','05','06','07','08','09','10','11','12'];
  
  Order_Day:any = this.Order_Date_Now.getDate();
  Order_Date:any = this.Order_Day+'-'+this.Month[this.Order_Month]+'-'+this.Order_Year;
  I1:any;
  I2:any;
  I3:any;
  I4:any;
  I5:any;
  I6:any;
  I7:any;
  I8:any;
  I9:any;
  I10:any;
  
  Item1: any=[];
  Item2: any=[];
  Item3: any=[];
  Item4: any=[];
  Item5: any=[];
  Item6: any=[];
  Item7: any=[];
  Item8: any=[];
  Item9: any=[];
  Item10: any=[];
  des1: string;
  des2: string;
  des3: string;
  des4: string;
  des5: string;
  des6: string;
  des7: string;
  des8: string;
  des9: string;
  des10: string;
  TotItems: number;
  ReciptTotal: number;
  btList: any;

  
  
  constructor(private activatedRoute: ActivatedRoute,
    public navCtrl: NavController,
    private dataService: DataService,
    private printProvider:PrintProvider,
      private bluetoothSerial: BluetoothSerial,
      public platform: Platform,
      private toastController: ToastController,
      ) {

    this.billing = "b";
   }

  ngOnInit() {

    this.Order_Id = this.activatedRoute.snapshot.paramMap.get("Order_Id");
this.viewOrderDetails();

this.platform.ready().then(()=>{
  this.listBT();
 });
    
  }
  Bar1: any;
  Bar2: any;
  Bar3: any;
  Bar4: any;
  Bar5: any;
  Bar6: any;
  Bar7: any;
  Bar8: any;
  Bar9: any;
  Bar10: any;
  Q1:any=1;
  Q2:any=1;
  Q3:any=1;
  Q4:any=1;
  Q5:any=1;
  Q6:any=1;
  Q7:any=1;
  Q8:any=1;
  Q9:any=1;
  Q10:any=1;

  viewOrderDetails(){
    let Data = {}
    this.dataService.postData('http://esmartpos-com.stackstaging.com/orderdcrud/orderdetail/'+this.Order_Id,Data).subscribe(
      (res)=>{
        let data = res.json();
        this.getDetail=data;
        
        this.Detail1.push(this.getDetail[0].Product_Name);
        this.Detail1.push(this.getDetail[0].Quantity);
        this.Detail1.push(this.getDetail[0].Net_Price);
        
        
        this.Detail2.push(this.getDetail[1].Product_Name);
        this.Detail2.push(this.getDetail[1].Quantity);
        this.Detail2.push(this.getDetail[1].Net_Price);

        this.Detail3.push(this.getDetail[2].Product_Name);
        this.Detail3.push(this.getDetail[2].Quantity);
        this.Detail3.push(this.getDetail[2].Net_Price);

        this.Detail4.push(this.getDetail[3].Product_Name);
        this.Detail4.push(this.getDetail[3].Quantity);
        this.Detail4.push(this.getDetail[3].Net_Price);

        this.Detail5.push(this.getDetail[4].Product_Name);
        this.Detail5.push(this.getDetail[4].Quantity);
        this.Detail5.push(this.getDetail[4].Net_Price);

        this.Detail6.push(this.getDetail[5].Product_Name);
        this.Detail6.push(this.getDetail[5].Quantity);
        this.Detail6.push(this.getDetail[5].Net_Price);

        this.Detail7.push(this.getDetail[6].Product_Name);
        this.Detail7.push(this.getDetail[6].Quantity);
        this.Detail7.push(this.getDetail[6].Net_Price);

        this.Detail8.push(this.getDetail[7].Product_Name);
        this.Detail8.push(this.getDetail[7].Quantity);
        this.Detail8.push(this.getDetail[7].Net_Price);

        this.Detail9.push(this.getDetail[8].Product_Name);
        this.Detail9.push(this.getDetail[8].Quantity);
        this.Detail9.push(this.getDetail[8].Net_Price);

        this.Detail10.push(this.getDetail[9].Product_Name);
        this.Detail10.push(this.getDetail[9].Quantity);
        this.Detail10.push(this.getDetail[9].Net_Price);

        this.presentToastOrder();
        

        
      }
    );
  }
  async presentToastOrder() {
    const toast = await this.toastController.create({
      message: this.getDetail.message,
      duration: 4000
    });
    toast.present();
  }
  listBT()
  {
   this.printProvider.searchBt().then((li)=>{
     this.btList= li[0];

   });
  }
  printData()
  {
    var a1 = parseInt(this.Detail1[2]);
    var a2 = parseInt(this.Detail2[2]);
    var a3 = parseInt(this.Detail3[2]);
    var a4 = parseInt(this.Detail4[2]);
    var a5 = parseInt(this.Detail5[2]);
    var a6 = parseInt(this.Detail6[2]);
    var a7 = parseInt(this.Detail7[2]);
    var a8 = parseInt(this.Detail8[2]);
    var a9 = parseInt(this.Detail9[2]);
    var a10 = parseInt(this.Detail10[2]);
    var a11 = parseInt(this.Detail1[1]);
    var a22 = parseInt(this.Detail2[1]);
    var a33 = parseInt(this.Detail3[1]);
    var a44 = parseInt(this.Detail4[1]);
    var a55 = parseInt(this.Detail5[1]);
    var a66 = parseInt(this.Detail6[1]);
    var a77 = parseInt(this.Detail7[1]);
    var a88 = parseInt(this.Detail8[1]);
    var a99 = parseInt(this.Detail9[1]);
    var a1010 = parseInt(this.Detail10[1]);
    var m1 = a1*a11;
    var m2 = a2*a22;
    var m3 = a3*a33;
    var m4 = a4*a44;
    var m5 = a5*a55;
    var m6 = a6*a66;
    var m7 = a7*a77;
    var m8 = a8*a88;
    var m9 = a9*a99;
    var m10 = a10*a1010;
    this.des1='QTY:'+a11+'             PRICE:'+m1;
    this.des2='QTY:'+a22+'             PRICE:'+m2;
    this.des3='QTY:'+a33+'             PRICE:'+m3;
    this.des4='QTY:'+a44+'             PRICE:'+m4;
    this.des5='QTY:'+a55+'             PRICE:'+m5;
    this.des6='QTY:'+a66+'             PRICE:'+m6;
    this.des7='QTY:'+a77+'             PRICE:'+m7;
    this.des8='QTY:'+a88+'             PRICE:'+m8;
    this.des9='QTY:'+a99+'             PRICE:'+m9;
    this.des10='QTY:'+a1010+'             PRICE:'+m10;
    this.Item1 = this.Detail1[0];
    this.Item2 = this.Detail2[0];
    this.Item3 = this.Detail3[0];
    this.Item4 = this.Detail4[0];
    this.Item5 = this.Detail5[0];
    this.Item6 = this.Detail6[0];
    this.Item7 = this.Detail7[0];
    this.Item8 = this.Detail8[0];
    this.Item9 = this.Detail9[0];
    this.Item10 = this.Detail10[0];
     
    var esc = '\x1B'; //ESC byte in hex notation
    var newLine = '\x0A';
    var cmds = esc + "@";
    cmds += esc + '!' + '\x38';
    cmds += 'eSMART SHOPPING'; //text to print
            cmds += newLine + newLine;
            cmds += esc + '!' + '\x00'; //Character font A selected (ESC ! 0)
            
            cmds += this.Item1; 
            cmds += newLine;
            cmds += this.des1;
            cmds += newLine;
            this.TotItems=a11;
            var a111=a1*a11;
            this.ReciptTotal=a111;
            
            if(this.Detail2.length > 0 ){
            cmds += this.Item2;
            cmds += newLine;
            cmds += this.des2;
            cmds += newLine;
            this.TotItems+=a22;
            var a222=a2*a22;
            
            this.ReciptTotal+=a222;
            }
            if(this.Detail3.length > 0){
            cmds += this.Item3; 
            cmds += newLine;
            cmds += this.des3;
            cmds += newLine;
            this.TotItems+=a33;
            var a333=a3*a33;
            this.ReciptTotal+=a333;
          }
            if(this.Detail4.length > 0){
            cmds += this.Item4; 
            cmds += newLine;
            cmds += this.des4;
            cmds += newLine;
            this.TotItems+=a44;
            var a444=a4*a44;
            this.ReciptTotal+=a444;
          }
            if(this.Detail5.length > 0){
            cmds += this.Item5; 
            cmds += newLine;
            cmds += this.des5;
            cmds += newLine;
            this.TotItems+=a55;
            var a555=a5*a55;
            this.ReciptTotal+=a555;
          }
            if(this.Detail6.length > 0){
            cmds += this.Item6; 
            cmds += newLine;
            cmds += this.des6;
            cmds += newLine;
            
            this.TotItems+=a66;
            var a666=a6*a66;
            this.ReciptTotal+=a666;
            }
            if(this.Detail7.length > 0){
            cmds += this.Item7; 
            cmds += newLine;
            cmds += this.des7;
            cmds += newLine;
            this.TotItems+=a77;
            var a777=a7*a77;
            this.ReciptTotal+=a777;
            }
            if(this.Detail8.length > 0){
            cmds += this.Item8; 
            cmds += newLine;
            cmds += this.des8;
            cmds += newLine;
            this.TotItems+=a88;
            var a888=a8*a88;
            this.ReciptTotal+=a888;
          }
            if(this.Detail9.length > 0){
            cmds += this.Item9; 
            cmds += newLine;
            cmds += this.des9;
            cmds += newLine;
            this.TotItems+=a99;
            var a999=a9*a99;
            this.ReciptTotal+=a999;
            }
            if(this.Detail10.length > 0){
            cmds += this.Item10; 
            cmds += newLine;
            cmds += this.des1;
            cmds += newLine;
            this.TotItems+=a1010;
            var a101010=a10*a1010;
            this.ReciptTotal+=a101010;
            }
          
            cmds += newLine + newLine;
            cmds += 'TOTAL                   '+this.ReciptTotal;
            cmds += newLine + newLine;
            cmds += esc + '!' + '\x18'; //Emphasized + Double-height mode selected (ESC ! (16 + 8)) 24 dec => 18 hex
            cmds += '# ITEMS SOLD '+this.TotItems;
            cmds += esc + '!' + '\x10'; //Character font A selected (ESC ! 0)
            cmds += newLine;
            cmds += '        Dated:'+this.Order_Date;
            cmds += newLine+newLine;
            this.printProvider.testPrint(this.btList.address,cmds);
  }
  cancelOrder(){
    let Data = {}
    this.dataService.postData('http://esmartpos-com.stackstaging.com/salescrud/cancelw/',Data).subscribe(
   (res)=>{
   let data = res.json();
   //this.viewItem();
   this.getSales=data;
    //alert(JSON.stringify(data));
    this.presentToast();
    });
    
  }
  async presentToast() {
    const toast = await this.toastController.create({
      message: this.getSales.message,
      duration: 4000
    });
    toast.present();
  }


  

}