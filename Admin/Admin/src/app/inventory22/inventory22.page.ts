import { Component, OnInit } from '@angular/core';
import { Http, Headers} from '@angular/http';
import { DataService} from '../services/data.service';
import { CommonModule } from '@angular/common';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner/ngx';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-inventory22',
  templateUrl: './inventory22.page.html',
  styleUrls: ['./inventory22.page.scss'],
})
export class Inventory22Page implements OnInit {
  options: BarcodeScannerOptions;
  encodText: string = '';
  encodedData:any={};
  scannedData:any={};
  Product_Barcode: string = '';
  Product_Id: any;
  Product_Name: any;
  Brand:any;
  Product_Qty: any;
  Sale_Price: any;
  Purchase_Price: any;
  Pack: any=1;
  Discount: any = '0.0';
  product_category_id: any;
  getInventory:any;
  inventory: any;
  constructor(private dataServices: DataService, private nav: NavController, public scanner:BarcodeScanner) { 
    this.inventory = "manage";
  }

  ngOnInit() {
          this.viewInventory();
          
  }
  viewInventory(){
    let Data = {

    }
    this.dataServices.postData('http://esmartpos-com.stackstaging.com/productcrud/productg',Data).subscribe(
      (res)=>{
        let data = res.json();
        this.getInventory=data;
        console.log(JSON.stringify(this.getInventory));
      }
    );
  }
  addToInventory(){
  
    let data = {
      Product_Id:this.Product_Id,
      Product_Name: this.Product_Name,
      Brand:this.Brand,
      Sale_Price: this.Sale_Price,
      Purchase_Price: this.Purchase_Price,
      Product_Qty: this.Product_Qty,
      Product_Barcode: this.Product_Barcode,
      Pack: this.Pack,
      Discount:this.Discount,
      product_category_id: this.product_category_id  
    }


    this.scanner.encode(this.scanner.Encode.TEXT_TYPE, this.Product_Barcode).then((data) => {
      this.encodedData = data;
    }, (err) =>{
      console.log('Error',err);
    })
    this.dataServices.postData('http://esmartpos-com.stackstaging.com/productcrud/product',JSON.stringify(data)).subscribe(
      (res)=>{
        let data = res.json();
        this.viewInventory();
        this.Product_Id = '';
        this.Product_Name='';
        this.Brand='';
        this.Sale_Price='';
        this.Purchase_Price='';
        this.Product_Qty='';
        this.Product_Barcode='';
        this.Pack='';
        this.Discount='0.0';
        this.product_category_id='';  

      }
    );
    
  }


  deleteInventory(Product_Id){
    let Data= {}
  this.dataServices.postData('http://esmartpos-com.stackstaging.com/productcrud/productd/'+Product_Id,Data).subscribe(
  (res)=> {
    let data =res.json();
    console.log(JSON.stringify(data));
    this.viewInventory();
  }
  )
} 

RedirectMe(){
  this.viewInventory();
  window.location.replace("/inventory1");
}

RedirectMeToUpdate(Product_Id){
  this.nav.navigateForward('/update-inventory/'+Product_Id);
}
  //saveData() {
    //Product_Qty,Product_Barcode,Pack,Discount,product_category_id
    //let headers = new Headers();
    //headers.append('Content-Type','application/json');
    //let data = {
      //Name: this.ItemName,
      //Category: this.ItemCategory,
      //SoldBy: this.ItemSoldBy,
      //Price: this.ItemPrice,
      //Cost: this.ItemCost,
      //Quantity: this.ItemQty,
      //BarcodeNumber: this.ItemBarcode
    //}
    //this.http.post('http://localhost/C_I/salesmancrud/salesman',JSON.stringify(data),headers)
     //   .map(res => res.json()); 
}
