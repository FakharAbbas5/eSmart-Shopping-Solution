import { Component, OnInit } from '@angular/core';
import { DataService} from '../services/data.service';


@Component({
  selector: 'app-homee',
  templateUrl: './homee.page.html',
  styleUrls: ['./homee.page.scss'],
})

export class HomeePage implements OnInit {
  
  constructor(private dataServices: DataService) { }

  ngOnInit() {
    
  }

  
}
