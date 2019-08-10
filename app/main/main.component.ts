import { Component, OnInit } from '@angular/core';
import { BusSchedule } from './BusSchedule';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  name = 'Nicholas';
  Car = 'Car';

  setText(i){
    if(i == 'Car'){
      this.Car = "Car";
    }else{
      this.Car = "Bus";
    }
  }

  Transport : any[] = [{ type: 'Car' }, {type: 'Bus'}]

  Buses : BusSchedule[] = [
    {route: "Route 1", leave: "8:40", arrive:"9:40"},
    {route: "Route 2", leave:"9:10", arrive: "10:10"}]
constructor() { }

  ngOnInit() {
  }

  

}
