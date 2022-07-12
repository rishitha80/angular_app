import { Component, OnDestroy, OnInit } from '@angular/core';
import {  observable, Observable, subscribeOn, Subscription } from 'rxjs';
import {filter} from 'rxjs/operators'
import {MatCheckboxModule} from '@angular/material/checkbox';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit, OnDestroy {
//declaring a json object
  fristperson={
    name:'sairam',
    age: 199,
    id: 123456789
  }
  //constuctor is used for ependency injection and also declaring the properties
  constructor() { }

  //this is a lifecycle hook executed when this typescript fle is initiated
  ngOnInit() {
         
// declaring promise and defining values using resolve method and then retriving the values using then() method
    const promise = new Promise(resorelve=>{
      console.log('Prmoise cal..')
      setTimeout(()=>{
        resorelve('Promise called')
        resorelve('Promise called1')
        resorelve('Promise called2')
      },1000)
    })
   promise.then(result=> console.log(result))
// declairing an observable object and using next metho to describe values to it and calling  observable.subscribe() to get the value from the obs object
    const obser = new Observable(sub =>{
    
      setTimeout(()=>{
        sub.next('Observable is called21')
        sub.next('Observable is called8')
        sub.next('Observable is called1')
        sub.next('Observable is called2')
      },2000);
    });
   obser.pipe(filter(d=> d === 'Observable is called8')).subscribe(res => console.log(res));
  }
 // we need to unsubcribe the observable object after our work is done else it will be running in infinte loop
  ngOnDestroy(): void {
    // this.endSub.unsubscribe();
  }
  
}
