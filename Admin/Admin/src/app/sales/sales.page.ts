import { Component, OnInit } from '@angular/core';
import { DataService} from '../services/data.service';
declare var google;
@Component({
  selector: 'app-sales',
  templateUrl: './sales.page.html',
  styleUrls: ['./sales.page.scss'],
})
export class SalesPage implements OnInit {
  Cat2: any;
  Cat1: any;
  Cat3: any;
  Cat4: any;
  getInventory: any;
  Date1: string='';
  Date2: string='';
  ddate: any;
  ddate1: any;

  constructor(private dataServices: DataService) { 
    
  }

  ngOnInit() {
    
    
  }
  ionViewWillEnter(){
    
  }
  async showChart(){
    
     this.Date1 = this.ddate.split('T')[0];
    this.Date2 =  this.ddate1.split('T')[0];
    console.log(this.Date1,this.Date2,'HELLO');
    
   this.getReport2();
    
    //google.charts.load('current', {'packages':['corechart']});
    //  google.charts.setOnLoadCallback(drawChart);

    console.log('Hello');
    var data = new google.visualization.DataTable();
        data.addColumn('string', 'Topping');
        data.addColumn('number', 'Slices');
        data.addRows([
          ['Electronics', this.Cat1],
          ['Crockery', this.Cat2],
          ['Cosmetics', this.Cat3],
          ['Sports', this.Cat4],
         
        ]);

        // Set chart options
        var options = {'title':'Category Wise Products in Inventory',
                       'width':600,
                       'height':450,
                       is3D:true,
                       colors: ['#f1c40f','#e67e22','#16a085','#2980b9']
                      };

        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
        chart.draw(data, options);
  }

  showBarChart(){
    
    google.charts.load("current", {packages:['corechart']});
    google.charts.setOnLoadCallback(drawChart);
    function drawChart() {
      var data = google.visualization.arrayToDataTable(
        ["Element", "Density", { role: "style" } ],
        ["Electronics",25, "#f1c40f"],
        ["Furniture", 25, "#e67e22"],
        ["Crockery", 25, "#16a085"],
        ["Sports", 25, "color: #2980b9"]
      );

      var view = new google.visualization.DataView(data);
      view.setColumns([0, 1,
                       { calc: "stringify",
                         sourceColumn: 1,
                         type: "string",
                         role: "annotation" },
                       2]);

      var options = {
        title: "Total Items Sold Based on Category",
        width: 600,
        height: 400,
        bar: {groupWidth: "95%"},
        legend: { position: "none" },
        is3D:true
      };
      var chart = new google.visualization.ColumnChart(document.getElementById("columnchart_values"));
      chart.draw(view, options);
  }
  
}



  getReport(){

    //productccrud/sumdaily+data1+data2
let Data={}
this.dataServices.postData('http://esmartpos-com.stackstaging.com/productccrud/sum',Data).subscribe(
      (res)=>{
        let data = res.json();
        this.getInventory=data;
       
        console.log(JSON.stringify(this.getInventory));
        this.Cat1=data.category1;
        this.Cat2=data.category2;
        this.Cat3=data.category3;
        this.Cat4=data.category4;
        
      }
    );
  }

  getReport2(){
    let Data={}
this.dataServices.postData('http://esmartpos-com.stackstaging.com/productccrud/sumdaily/'+this.Date1+'/'+this.Date2,Data).subscribe(
      (res)=>{
        let data = res.json();
        this.getInventory=data;
        
        console.log(JSON.stringify(this.getInventory));
        this.Cat1=data.category1;
        this.Cat2=data.category2;
        this.Cat3=data.category3;
        this.Cat4=data.category4;
        console.log(data);
        

        console.log('Hello');
        var dataa = new google.visualization.DataTable();
            dataa.addColumn('string', 'Topping');
            dataa.addColumn('number', 'Slices');
            dataa.addRows([
              ['Electronics', this.Cat1],
              ['Crockery', this.Cat2],
              ['Cosmetics', this.Cat3],
              ['Sports', this.Cat4],
             
            ]);
    
            // Set chart options
            var options = {'title':'Category Wise Products in Inventory',
                           'width':600,
                           'height':450,
                           is3D:true,
                           colors: ['#f1c40f','#e67e22','#16a085','#2980b9']
                          };
    
            // Instantiate and draw our chart, passing in some options.
            var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
            chart.draw(dataa, options);
        
        //this.showBarChart();

      }
    );
  }

}
