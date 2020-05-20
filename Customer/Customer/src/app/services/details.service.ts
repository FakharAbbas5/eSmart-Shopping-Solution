import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
 
export interface Item {
  Product_Id:any;
  Product_Name:any;
  Brand:any;
  Sale_Price:any;

}
 
const ITEMS_KEY = 'my-items';
 
@Injectable({
  providedIn: 'root'
})
export class DetailsService {
 
  constructor(private storage: Storage) { }
 
  // CREATE
  addItem(item: Item): Promise<any> {
    return this.storage.get(ITEMS_KEY).then((items: Item[]) => {
      if (items) {
        items.push(item);
        return this.storage.set(ITEMS_KEY, items);
      } else {
        return this.storage.set(ITEMS_KEY, [item]);
      }
    });
  }
  getItems(): Promise<Item[]> {
    return this.storage.get(ITEMS_KEY);
  }
 
  // UPDATE
  updateItem(item: Item): Promise<any> {
    return this.storage.get(ITEMS_KEY).then((items: Item[]) => {
      if (!items || items.length === 0) {
        return null;
      }
 
      let newItems: Item[] = [];
 
      for (let i of items) {
        if (i.Product_Id === item.Product_Id) {
          newItems.push(item);
        } else {
          newItems.push(i);
        }
      }
 
      return this.storage.set(ITEMS_KEY, newItems);
    });
  }
 
  // DELETE
  deleteItem(Product_Id: number): Promise<Item> {
    return this.storage.get(ITEMS_KEY).then((items: Item[]) => {
      if (!items || items.length === 0) {
        return null;
      }
 
      let toKeep: Item[] = [];
 
      for (let i of items) {
        if (i.Product_Id !== Product_Id) {
          toKeep.push(i);
        }
      }
      return this.storage.set(ITEMS_KEY, toKeep);
    });
  }
}