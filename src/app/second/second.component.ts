import { Component, Input, OnInit } from '@angular/core';
interface FPerson{
  name: string,
  age: number,
  id: number
}
@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss']
})
export class SecondComponent implements OnInit {

  @Input() fPerson: FPerson
  constructor() {
    this.fPerson={} as FPerson
   }

  ngOnInit(): void {
  }

}
