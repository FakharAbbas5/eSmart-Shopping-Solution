import { Component, OnInit } from '@angular/core';
import { Http, Headers} from '@angular/http';
import { DataService} from '../services/data.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-update-inventory',
  templateUrl: './update-inventory.page.html',
  styleUrls: ['./update-inventory.page.scss'],
})
export class UpdateInventoryPage implements OnInit {
  Product_Barcode: any;
  Product_Id: any;
  Product_Name: any;
  Brand:any;
  Product_Qty: any;
  Sale_Price: any;
  Purchase_Price: any;
  Pack: any=1;
  Discount: any;
  product_category_id: any;
  getInventory:any;
  inventory: any;

  constructor(private dataService: DataService, private activatedRoute: ActivatedRoute) { 
  }

  ngOnInit() {

    this.Product_Id = this.activatedRoute.snapshot.paramMap.get("Product_Id");  
              this.viewInventory();
              console.log(this.Product_Id);

  }
  viewInventory(){
    let Data = {}
    this.dataService.postData('http://esmartpos-com.stackstaging.com/productcrud/productg',Data).subscribe(
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
    this.dataService.postData('http://esmartpos-com.stackstaging.com/productcrud/product',JSON.stringify(data)).subscribe(
      (res)=>{
        let data = res.json();
        this.viewInventory();
        console.log(JSON.stringify(this.getInventory));
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
    let Data = {}
  this.dataService.postData('http://esmartpos-com.stackstaging.com/productcrud/productd/'+Product_Id,Data).subscribe(
  (res)=> {
    let data =res.json();
    console.log(JSON.stringify(data));
    this.viewInventory();
  }
  )
} 


updateInventory() {
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
//console.log(data);
let adata = new FormData();
//adata.append('Salesman_Id',this.Salesman_Id);
//a.append('Salesman_Name',this.Salesman_Name);
//a.append('Email',this.Email);
//a.append('Password',this.Password); 
// a.append('Contact',this.Contact);
//a.append('Salesman_Join_Date',this.Salesman_Join_Date);
//a.append('Salesman_Last_Login',this.Salesman_Last_Login);
//console.log(data);
this.dataService.postData('http://esmartpos-com.stackstaging.com/productcrud/productp',JSON.stringify(data)).subscribe(
      (res)=>{
        let data = res.json();
        this.viewInventory();
        console.log(JSON.stringify(this.getInventory));
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
        
        window.location.replace("/inventory1");
      }
    );
  }

  //saveData() {
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
