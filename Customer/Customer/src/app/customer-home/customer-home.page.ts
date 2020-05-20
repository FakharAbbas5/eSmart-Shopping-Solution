import { Component, OnInit, ViewChild } from '@angular/core';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner/ngx';
import { NavController } from '@ionic/angular';
import { DataService} from '../service/data.service';
import { MyOrdersPage } from '../my-orders/my-orders.page';
import { DetailsService, Item } from '../services/details.service';
import { Platform, ToastController, IonList } from '@ionic/angular';
import { totalmem } from 'os';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customer-home',
  templateUrl: './customer-home.page.html',
  styleUrls: ['./customer-home.page.scss'],
})
export class CustomerHomePage implements OnInit {
  options: BarcodeScannerOptions;
  encodText: string = '';
  encodedData:any;
  scannedData:any;
  getItem: any;
  items: Item[] = [];
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
  Customer_Name : any = 'Ali' ;
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
  Customer_Id: any;
  
  constructor(private activatedRoute: ActivatedRoute,private detailService: DetailsService, private plt: Platform, private toastController: ToastController,public navCtrl: NavController, public scanner:BarcodeScanner,private dataService: DataService) {
  
  }
 // Helper
 
  ngOnInit() {

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


  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Order Placed Successfully',
      color:'success',
      duration: 4000
    });
    toast.present();
  }

placeOrder() {

 

  let data = {
    Customer_Name:this.Customer_Name,
    Order_Total_Amount: this.Order_Total_Amount,
    Order_Date: this.Order_Date,
  }

  this.dataService.postData('http://esmartpos-com.stackstaging.com/orderdcrud/order',JSON.stringify(data)).subscribe(
  (res)=>{
  let data = res.json();
  //this.viewItem();

  
  this.getSales=data;
   console.log(JSON.stringify(data));
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
   let Data={}
   //alert(this.Bar5);
   if (this.Bar1 == undefined){ return; }
  this.dataService.postData('http://esmartpos-com.stackstaging.com/orderdcrud/orderddt/'+this.Bar1+'/'+this.Q1,Data).subscribe(
   (res)=>{
   let data = res.json();
   //this.viewItem();
   this.getSales=data;
    console.log(JSON.stringify(data));
   }
   );
 
   if (this.Bar2 == undefined){ return; }
 
  this.dataService.postData('http://esmartpos-com.stackstaging.com/orderdcrud/orderddt/'+this.Bar2+'/'+this.Q2,Data).subscribe(
   (res)=>{
   let data = res.json();
   //this.viewItem();
   this.getSales=data;
    console.log(JSON.stringify(data));
   }
   );
 
   //if (this.Detail3.length < 1 || this.Detail3 == undefined){ return; }
   if (this.Bar3 == undefined){ return; }
  this.dataService.postData('http://esmartpos-com.stackstaging.com/orderdcrud/orderddt/'+this.Bar3+'/'+this.Q3,Data).subscribe(
   (res)=>{
   let data = res.json();
   //this.viewItem();
   this.getSales=data;
    console.log(JSON.stringify(data));
   }
   );
 
 
  // if (this.Detail4.length < 1 || this.Detail4 == undefined){ return; }
  if (this.Bar4 == undefined){ return; }
  this.dataService.postData('http://esmartpos-com.stackstaging.com/orderdcrud/orderddt/'+this.Bar4+'/'+this.Q4,Data).subscribe(
   (res)=>{
   let data = res.json();
   //this.viewItem();
   this.getSales=data;
    console.log(JSON.stringify(data));
   }
   );
 
   if (this.Bar5 == undefined){ return; }
   this.dataService.postData('http://esmartpos-com.stackstaging.com/orderdcrud/orderddt/'+this.Bar5+'/'+this.Q5,Data).subscribe(
    (res)=>{
    let data = res.json();
    //this.viewItem();
    this.getSales=data;
     console.log(JSON.stringify(data));
    }
    );
     
   //if (this.Detail5.length < 1 || this.Detail5 == undefined){ return; }
   if (this.Bar6 == undefined){ return; }
  this.dataService.postData('http://esmartpos-com.stackstaging.com/orderdcrud/orderddt/'+this.Bar6+'/'+this.Q6,Data).subscribe(
   (res)=>{
   let data = res.json();
   //this.viewItem();
   this.getSales=data;
    console.log(JSON.stringify(data));
   }
   );

   if (this.Bar7 == undefined){ return; }
   this.dataService.postData('http://esmartpos-com.stackstaging.com/orderdcrud/orderddt/'+this.Bar7+'/'+this.Q7,Data).subscribe(
    (res)=>{
    let data = res.json();
    //this.viewItem();
    this.getSales=data;
     console.log(JSON.stringify(data));
    }
    );

    if (this.Bar8 == undefined){ return; }
    this.dataService.postData('http://esmartpos-com.stackstaging.com/orderdcrud/orderddt/'+this.Bar8+'/'+this.Q8,Data).subscribe(
     (res)=>{
     let data = res.json();
     //this.viewItem();
     this.getSales=data;
      console.log(JSON.stringify(data));
     }
     );

     if (this.Bar9 == undefined){ return; }
     this.dataService.postData('http://esmartpos-com.stackstaging.com/orderdcrud/orderddt/'+this.Bar9+'/'+this.Q9,Data).subscribe(
      (res)=>{
      let data = res.json();
      //this.viewItem();
      this.getSales=data;
       console.log(JSON.stringify(data));
      }
      );

      if (this.Bar10 == undefined){ return; }
      this.dataService.postData('http://esmartpos-com.stackstaging.com/orderdcrud/orderddt/'+this.Bar10+'/'+this.Q10,Data).subscribe(
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
  
  this.presentToast();
}



another(){
  window.location.replace("/customer-home");
}

}
