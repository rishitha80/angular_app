import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fourth',
  templateUrl: './fourth.component.html',
  styleUrls: ['./fourth.component.scss']
})
export class FourthComponent implements OnInit {

  item:any
  constructor() { }

  ngOnInit(): void {
  }
  Item(){
    this.item='chepati';
    
  }

}
