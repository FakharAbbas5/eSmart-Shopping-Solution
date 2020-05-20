import { Component, OnInit, ViewChild } from '@angular/core';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner/ngx';
import { NavController,AlertController } from '@ionic/angular';
import { DataService} from '../service/data.service';
import { Platform, ToastController, IonList } from '@ionic/angular';
import { PrintProvider } from '../print.service';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial/ngx';
@Component({
  selector: 'app-salesman-home',
  templateUrl: './salesman-home.page.html',
  styleUrls: ['./salesman-home.page.scss'],
})
export class SalesmanHomePage implements OnInit {
  options: BarcodeScannerOptions;
  encodText: string = '';
  encodedData:any;
  scannedData:any;
  getItem: any;
  

  Detail1: any = [];
  Detail2: any = [];
  Detail3: any = [];
  Detail4: any = [];
  Detail5: any = [];
  Detail6: any = [];
  Detail7: any = [];
  Detail8: any = [];
  Detail9: any = [];
  Detail10: any = [];
  Detail11: any = [];
  Detail12: any = [];
  Detail13: any = [];
  Detail14: any = [];
  Detail15: any = [];
  Detail16: any = [];
  Detail17: any = [];
  Detail18: any = [];
  Detail19: any = [];
  Detail20: any = [];

  DC1:any=0;
  DC2:any=0;
  DC3:any=0;
  DC4:any=0;
  DC5:any=0;
  DC6:any=0;
  DC7:any=0;
  DC8:any=0;
  DC9:any=0;
  DC10:any=0;
  DC11:any=0;
  DC12:any=0;
  DC13:any=0;
  DC14:any=0;
  DC15:any=0;
  DC16:any=0;
  DC17:any=0;
  DC18:any=0;
  DC19:any=0;
  DC20:any=0;
  totalAmount:any=0;
  to:any=0;
  sum:any=[];
  getSales: any;
  Product_Id: any;
  Order_Id: any = 6;
  Salesman_Name : any = 'Nayab';
  Order_Total_Amount :any = 0;
  
  Order_Date_Now: any = new Date();
  Order_Year:any = this.Order_Date_Now.getFullYear();
  Order_Month:any = this.Order_Date_Now.getMonth();
  Month:any=['01','02','03','04','05','06','07','08','09','10','11','12'];
  Order_Day:any = this.Order_Date_Now.getDate();
  Order_Date:any = this.Order_Year+'-'+this.Month[this.Order_Month]+'-'+this.Order_Day;
  Order_Description : any = 'Laptop';
  total: any;
  i: number;
  Product_Qty: any=1;
  getSum: any;
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
  OPEN:any=0;
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
  
  
  btList: any;
  printerData: any=[];
  title:any;
  headings: string;
  Item1: any;
  Item2: string;
  Item3: string;
  Item4: string;
  Item5: string;
  Item6: string;
  Item7: string;
  Item8: string;
  Item9: string;
  Item10: string;
  TotItems: number;
  pcheck1: number;
  pcheck2: number;
  pcheck3: number;
  pcheck4: number;
  ReciptTotal: any;
  a: string;
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

  constructor(private plt: Platform,
     private toastController: ToastController,
     public navCtrl: NavController,
      public scanner:BarcodeScanner,
      private dataService: DataService,
      private printProvider:PrintProvider,
      private bluetoothSerial: BluetoothSerial,
      public platform: Platform,
      ) { }

  ngOnInit() {
    this.platform.ready().then(()=>{
      this.listBT();
     });
  }
  scan(){
    this.totalAmount=0;

    this.options = {
      prompt: 'Scanning Item'
    };
    this.scanner.scan(this.options).then((data) => {
      this.scannedData = data.text;
let Data = {}
      this.dataService.postData('http://esmartpos-com.stackstaging.com/productcrud/productQty/'+this.scannedData,Data).subscribe(
          (res)=>{
            let data = res.json();
            this.getItem=data;
            console.log(JSON.stringify(this.getItem));
            
            if(this.getItem.Product_Id != undefined && this.Detail1.length < 1 || this.Detail1 == undefined){
            
              this.Detail1.push(this.getItem.Product_Id,this.getItem.Product_Name,this.getItem.Brand,this.getItem.Sale_Price,this.scannedData,this.Q1);
              this.OPEN=1;
              this.DC1=1;
          
          this.sum.push(this.Detail1[3]);
          

          
          }
        
          else if(this.getItem.Product_Id != undefined && this.Detail2.length < 1 || this.Detail2 == undefined){
            if(this.getItem.Product_Id==this.Detail1[0]){
             this.Detail1[5]++;
            }
            else{
            this.Detail2.push(this.getItem.Product_Id,this.getItem.Product_Name,this.getItem.Brand,this.getItem.Sale_Price,this.scannedData,this.Q2);
            this.DC2=1;
            this.sum.push(this.Detail2[3]);
            }
        }
        else if(this.getItem.Product_Id != undefined && this.Detail3.length < 1 || this.Detail3 == undefined){
          if(this.getItem.Product_Id==this.Detail1[0]){
            this.Detail1[5]++;
           }
           else if(this.getItem.Product_Id==this.Detail2[0]){
            this.Detail2[5]++;
           }
            else{
            this.Detail3.push(this.getItem.Product_Id,this.getItem.Product_Name,this.getItem.Brand,this.getItem.Sale_Price,this.scannedData,this.Q3);
            this.DC3=1;
            this.sum.push(this.Detail3[3]);
            }
        }
        else if(this.getItem.Product_Id != undefined && this.Detail4.length < 1 || this.Detail4 == undefined){
          if(this.getItem.Product_Id==this.Detail1[0]){
            this.Detail1[5]++;
           }
           else if(this.getItem.Product_Id==this.Detail2[0]){
            this.Detail2[5]++;
           }
           else if(this.getItem.Product_Id==this.Detail3[0]){
            this.Detail3[5]++;
           }
           else{
            this.Detail4.push(this.getItem.Product_Id,this.getItem.Product_Name,this.getItem.Brand,this.getItem.Sale_Price,this.scannedData,this.Q4);
            this.DC4=1;
  
            this.sum.push(this.Detail4[3]);
           }
        }
        else if(this.getItem.Product_Id != undefined && this.Detail5.length < 1 || this.Detail5 == undefined){
          if(this.getItem.Product_Id==this.Detail1[0]){
            this.Detail1[5]++;
           }
           else if(this.getItem.Product_Id==this.Detail2[0]){
            this.Detail2[5]++;
           }
           else if(this.getItem.Product_Id==this.Detail3[0]){
            this.Detail3[5]++;
           }
           else if(this.getItem.Product_Id==this.Detail4[0]){
            this.Detail4[5]++;
           }
        else{
            this.Detail5.push(this.getItem.Product_Id,this.getItem.Product_Name,this.getItem.Brand,this.getItem.Sale_Price,this.scannedData,this.Q5);
            this.DC5=1;
            this.sum.push(this.Detail5[3]);
        }
        }
        else if(this.getItem.Product_Id != undefined && this.Detail6.length < 1 || this.Detail6 == undefined){
          if(this.getItem.Product_Id==this.Detail1[0]){
            this.Detail1[5]++;
           }
           else if(this.getItem.Product_Id==this.Detail2[0]){
            this.Detail2[5]++;
           }
           else if(this.getItem.Product_Id==this.Detail3[0]){
            this.Detail3[5]++;
           }
           else if(this.getItem.Product_Id==this.Detail4[0]){
            this.Detail4[5]++;
           }
           else if(this.getItem.Product_Id==this.Detail5[0]){
            this.Detail5[5]++;
           }
        else{
          this.Detail6.push(this.getItem.Product_Id,this.getItem.Product_Name,this.getItem.Brand,this.getItem.Sale_Price,this.scannedData,this.Q6);
          this.DC6=1;
          this.sum.push(this.Detail6[3]);
        }
      }
      else if(this.getItem.Product_Id != undefined && this.Detail7.length < 1 || this.Detail7 == undefined){
        if(this.getItem.Product_Id==this.Detail1[0]){
          this.Detail1[5]++;
         }
         else if(this.getItem.Product_Id==this.Detail2[0]){
          this.Detail2[5]++;
         }
         else if(this.getItem.Product_Id==this.Detail3[0]){
          this.Detail3[5]++;
         }
         else if(this.getItem.Product_Id==this.Detail4[0]){
          this.Detail4[5]++;
         }
         else if(this.getItem.Product_Id==this.Detail5[0]){
          this.Detail5[5]++;
         }
         else if(this.getItem.Product_Id==this.Detail6[0]){
          this.Detail6[5]++;
         }
         else{
        this.Detail7.push(this.getItem.Product_Id,this.getItem.Product_Name,this.getItem.Brand,this.getItem.Sale_Price,this.scannedData,this.Q7);
        this.DC7=1;
        this.sum.push(this.Detail7[3]);
         }
    }
    else if(this.getItem.Product_Id != undefined && this.Detail8.length < 1 || this.Detail8 == undefined){
      if(this.getItem.Product_Id==this.Detail1[0]){
        this.Detail1[5]++;
       }
       else if(this.getItem.Product_Id==this.Detail2[0]){
        this.Detail2[5]++;
       }
       else if(this.getItem.Product_Id==this.Detail3[0]){
        this.Detail3[5]++;
       }
       else if(this.getItem.Product_Id==this.Detail4[0]){
        this.Detail4[5]++;
       }
       else if(this.getItem.Product_Id==this.Detail5[0]){
        this.Detail5[5]++;
       }
       else if(this.getItem.Product_Id==this.Detail6[0]){
        this.Detail6[5]++;
       }
       else if(this.getItem.Product_Id==this.Detail7[0]){
        this.Detail7[5]++;
       }
       else{
      this.Detail8.push(this.getItem.Product_Id,this.getItem.Product_Name,this.getItem.Brand,this.getItem.Sale_Price,this.scannedData,this.Q8);
      this.DC8=1;
      this.sum.push(this.Detail8[3]);
       }
    }
  else if(this.getItem.Product_Id != undefined && this.Detail9.length < 1 || this.Detail9 == undefined){
    if(this.getItem.Product_Id==this.Detail1[0]){
      this.Detail1[5]++;
     }
     else if(this.getItem.Product_Id==this.Detail2[0]){
      this.Detail2[5]++;
     }
     else if(this.getItem.Product_Id==this.Detail3[0]){
      this.Detail3[5]++;
     }
     else if(this.getItem.Product_Id==this.Detail4[0]){
      this.Detail4[5]++;
     }
     else if(this.getItem.Product_Id==this.Detail5[0]){
      this.Detail5[5]++;
     }
     else if(this.getItem.Product_Id==this.Detail6[0]){
      this.Detail6[5]++;
     }
     else if(this.getItem.Product_Id==this.Detail7[0]){
      this.Detail7[5]++;
     }
     else if(this.getItem.Product_Id==this.Detail8[0]){
      this.Detail8[5]++;
     }
     else{  
    this.Detail9.push(this.getItem.Product_Id,this.getItem.Product_Name,this.getItem.Brand,this.getItem.Sale_Price,this.scannedData,this.Q9);
    this.DC9=1;
    this.sum.push(this.Detail9[3]);
     }
}

else if(this.getItem.Product_Id != undefined && this.Detail10.length < 1 || this.Detail10 == undefined){
  if(this.getItem.Product_Id==this.Detail1[0]){
    this.Detail1[5]++;
   }
   else if(this.getItem.Product_Id==this.Detail2[0]){
    this.Detail2[5]++;
   }
   else if(this.getItem.Product_Id==this.Detail3[0]){
    this.Detail3[5]++;
   }
   else if(this.getItem.Product_Id==this.Detail4[0]){
    this.Detail4[5]++;
   }
   else if(this.getItem.Product_Id==this.Detail5[0]){
    this.Detail5[5]++;
   }
   else if(this.getItem.Product_Id==this.Detail6[0]){
    this.Detail6[5]++;
   }
   else if(this.getItem.Product_Id==this.Detail7[0]){
    this.Detail7[5]++;
   }
   else if(this.getItem.Product_Id==this.Detail8[0]){
    this.Detail8[5]++;
   }
   else if(this.getItem.Product_Id==this.Detail9[0]){
    this.Detail9[5]++;
   }
  else{      
  this.Detail10.push(this.getItem.Product_Id,this.getItem.Product_Name,this.getItem.Brand,this.getItem.Sale_Price,this.scannedData,this.Q10);
  this.DC10=1;
 
  this.sum.push(this.Detail10[3]);
}
}
else if(this.getItem.Product_Id != undefined){
  if(this.getItem.Product_Id==this.Detail1[0]){
    this.Detail1[5]++;
   }
   else if(this.getItem.Product_Id==this.Detail2[0]){
    this.Detail2[5]++;
   }
   else if(this.getItem.Product_Id==this.Detail3[0]){
    this.Detail3[5]++;
   }
   else if(this.getItem.Product_Id==this.Detail4[0]){
    this.Detail4[5]++;
   }
   else if(this.getItem.Product_Id==this.Detail5[0]){
    this.Detail5[5]++;
   }
   else if(this.getItem.Product_Id==this.Detail6[0]){
    this.Detail6[5]++;
   }
   else if(this.getItem.Product_Id==this.Detail7[0]){
    this.Detail7[5]++;
   }
   else if(this.getItem.Product_Id==this.Detail8[0]){
    this.Detail8[5]++;
   }
   else if(this.getItem.Product_Id==this.Detail9[0]){
    this.Detail9[5]++;
   }
   else if(this.getItem.Product_Id==this.Detail10[0]){
    this.Detail10[5]++;
   }
  else{      
  alert("Max 10 different Items can be Ordered");
}
}

          else{
            alert("Item not Available");
          }

        
          }
      );
    })
    
  }


  

placeOrder() {

 

  let data = {
    Salesman_Name:this.Salesman_Name
  }

  this.dataService.postData('http://esmartpos-com.stackstaging.com/salescrud/sales',JSON.stringify(data)).subscribe(
  (res)=>{
  let data = res.json();
  //this.viewItem();

  
  this.getSales=data;
  // alert(JSON.stringify(data));
   this.presentToastOrder();
   this.Bar1= this.Detail1[4];
   //alert(this.Bar1);
   this.Bar2= this.Detail2[4];
   //alert(this.Bar2);
   this.Bar3= this.Detail3[4];
   //alert(this.Bar3);
   this.Bar4= this.Detail4[4];
   //alert(this.Bar4);
   this.Bar5= this.Detail5[4];
   this.Bar6= this.Detail6[4];
   this.Bar7= this.Detail7[4];
   this.Bar8= this.Detail8[4];
   this.Bar9= this.Detail9[4];
   this.Bar10= this.Detail10[4];
   this.Q1= this.Detail1[5];
   this.Q2= this.Detail2[5];
   this.Q3= this.Detail3[5];
   this.Q4= this.Detail4[5];
   this.Q5= this.Detail5[5];
   this.Q6= this.Detail6[5];
   this.Q7= this.Detail7[5];
   this.Q8= this.Detail8[5];
   this.Q9= this.Detail9[5];
   this.Q10= this.Detail10[5];

   
   //alert(this.Bar5);
   let Data = {}
   if (this.Bar1 == undefined){ return; }
  this.dataService.postData('http://esmartpos-com.stackstaging.com/salescrud/salesddt/'+this.Bar1+'/'+this.Q1,Data).subscribe(
   (res)=>{
   let data = res.json();
   //this.viewItem();
   this.getSales=data;
  
   }
   );
 
   if (this.Bar2 == undefined){ return; }
 
  this.dataService.postData('http://esmartpos-com.stackstaging.com/salescrud/salesddt/'+this.Bar2+'/'+this.Q2,Data).subscribe(
   (res)=>{
   let data = res.json();
   //this.viewItem();
   this.getSales=data;
    console.log(JSON.stringify(data));
   }
   );
 
   //if (this.Detail3.length < 1 || this.Detail3 == undefined){ return; }
   if (this.Bar3 == undefined){ return; }
  this.dataService.postData('http://esmartpos-com.stackstaging.com/salescrud/salesddt/'+this.Bar3+'/'+this.Q3,Data).subscribe(
   (res)=>{
   let data = res.json();
   //this.viewItem();
   this.getSales=data;
    console.log(JSON.stringify(data));
   }
   );
 
 
  // if (this.Detail4.length < 1 || this.Detail4 == undefined){ return; }
  if (this.Bar4 == undefined){ return; }
  this.dataService.postData('http://esmartpos-com.stackstaging.com/salescrud/salesddt/'+this.Bar4+'/'+this.Q4,Data).subscribe(
   (res)=>{
   let data = res.json();
   //this.viewItem();
   this.getSales=data;
    console.log(JSON.stringify(data));
   }
   );
 
   if (this.Bar5 == undefined){ return; }
   this.dataService.postData('http://esmartpos-com.stackstaging.com/salescrud/salesddt/'+this.Bar5+'/'+this.Q5,Data).subscribe(
    (res)=>{
    let data = res.json();
    //this.viewItem();
    this.getSales=data;
     console.log(JSON.stringify(data));
    }
    );
     
   //if (this.Detail5.length < 1 || this.Detail5 == undefined){ return; }
   if (this.Bar6 == undefined){ return; }
  this.dataService.postData('http://esmartpos-com.stackstaging.com/salescrud/salesddt/'+this.Bar6+'/'+this.Q6,Data).subscribe(
   (res)=>{
   let data = res.json();
   //this.viewItem();
   this.getSales=data;
    console.log(JSON.stringify(data));
   }
   );

   if (this.Bar7 == undefined){ return; }
   this.dataService.postData('http://esmartpos-com.stackstaging.com/salescrud/salesddt/'+this.Bar7+'/'+this.Q7,Data).subscribe(
    (res)=>{
    let data = res.json();
    //this.viewItem();
    this.getSales=data;
     console.log(JSON.stringify(data));
    }
    );

    if (this.Bar8 == undefined){ return; }
    this.dataService.postData('http://esmartpos-com.stackstaging.com/salescrud/salesddt/'+this.Bar8+'/'+this.Q8,Data).subscribe(
     (res)=>{
     let data = res.json();
     //this.viewItem();
     this.getSales=data;
      console.log(JSON.stringify(data));
     }
     );

     if (this.Bar9 == undefined){ return; }
     this.dataService.postData('http://esmartpos-com.stackstaging.com/salescrud/salesddt/'+this.Bar9+'/'+this.Q9,Data).subscribe(
      (res)=>{
      let data = res.json();
      //this.viewItem();
      this.getSales=data;
       console.log(JSON.stringify(data));
      }
      );

      if (this.Bar10 == undefined){ return; }
      this.dataService.postData('http://esmartpos-com.stackstaging.com/salescrud/salesddt/'+this.Bar10+'/'+this.Q10,Data).subscribe(
       (res)=>{
       let data = res.json();
       //this.viewItem();
       this.getSales=data;
        console.log(JSON.stringify(data));
       }
       );


  // window.location.replace("\customer-home");
 
 
  }
  );
  //if (this.Detail1.length < 1 || this.Detail1 == undefined){ return; }
  this.printData();
  

}
  async presentToastOrder() {
    const toast = await this.toastController.create({
      message: this.getSales.message,
      color:'success',
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
    var a1 = parseInt(this.Detail1[3]);
    var a2 = parseInt(this.Detail2[3]);
    var a3 = parseInt(this.Detail3[3]);
    var a4 = parseInt(this.Detail4[3]);
    var a5 = parseInt(this.Detail5[3]);
    var a6 = parseInt(this.Detail6[3]);
    var a7 = parseInt(this.Detail7[3]);
    var a8 = parseInt(this.Detail8[3]);
    var a9 = parseInt(this.Detail9[3]);
    var a10 = parseInt(this.Detail10[3]);
    var a11 = parseInt(this.Detail1[5]);
    var a22 = parseInt(this.Detail2[5]);
    var a33 = parseInt(this.Detail3[5]);
    var a44 = parseInt(this.Detail4[5]);
    var a55 = parseInt(this.Detail5[5]);
    var a66 = parseInt(this.Detail6[5]);
    var a77 = parseInt(this.Detail7[5]);
    var a88 = parseInt(this.Detail8[5]);
    var a99 = parseInt(this.Detail9[5]);
    var a1010 = parseInt(this.Detail10[5]);
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
    this.des1='QTY:'+a11+'               PRICE:'+m1;
    this.des2='QTY:'+a22+'               PRICE:'+m2;
    this.des3='QTY:'+a33+'               PRICE:'+m3;
    this.des4='QTY:'+a44+'               PRICE:'+m4;
    this.des5='QTY:'+a55+'               PRICE:'+m5;
    this.des6='QTY:'+a66+'               PRICE:'+m6;
    this.des7='QTY:'+a77+'               PRICE:'+m7;
    this.des8='QTY:'+a88+'               PRICE:'+m8;
    this.des9='QTY:'+a99+'               PRICE:'+m9;
    this.des10='QTY:'+a1010+'               PRICE:'+m10;
    this.Item1 = this.Detail1[1];
    this.Item2 = this.Detail2[1];
    this.Item3 = this.Detail3[1];
    this.Item4 = this.Detail4[1];
    this.Item5 = this.Detail5[1];
    this.Item6 = this.Detail6[1];
    this.Item7 = this.Detail7[1];
    this.Item8 = this.Detail8[1];
    this.Item9 = this.Detail9[1];
    this.Item10 = this.Detail10[1];
     
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
            cmds += 'TOTAL                     '+this.ReciptTotal;
            cmds += newLine + newLine;
            cmds += esc + '!' + '\x18'; //Emphasized + Double-height mode selected (ESC ! (16 + 8)) 24 dec => 18 hex
            cmds += '# ITEMS SOLD '+this.TotItems;
            cmds += esc + '!' + '\x00'; //Character font A selected (ESC ! 0)
            cmds += newLine + newLine;
            cmds += '11/03/13  19:53:17';
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
  
  

  another(){
    window.location.replace("/salesman-home");
  }
  

}
