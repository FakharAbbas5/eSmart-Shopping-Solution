import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial/ngx';

@Injectable({
  providedIn: 'root'
})
export class PrintProvider {

  constructor(private btSerial:BluetoothSerial,private alertCtrl:AlertController) { }
  searchBt()
  {
    return this.btSerial.list();
  }

  connectBT(address)
  {
    return this.btSerial.connect(address);

  }

  async testPrint(address, printData)
  {

    let xyz=this.connectBT(address).subscribe(
      (data)=>{
        

          this.btSerial.write(printData).then(
            async (dataz)=>{
            
              console.log("Write Success",dataz);
              const alert = await this.alertCtrl.create({
                header: 'Print Success',
                subHeader: 'Print Success',
                message: 'Printed',
                buttons: ['Dismiss']
              });
          
              await alert.present();
              xyz.unsubscribe();

            }, 
          async(errx)=>{
            console.log("WRITE FAILED",errx);
            let mno=await this.alertCtrl.create({
              header:"ERROR "+errx,
              buttons:['Dismiss']
            });
            await mno.present();
          });

      },
      async (err)=>{

        console.log("CONNECTION ERROR",err);
        let mno=await this.alertCtrl.create({
          header:"ERROR "+err,
          buttons:['Dismiss']
        });
        await mno.present();

      });

  }

}
