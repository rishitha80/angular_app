import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ThirdComponent } from './third/third.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  //all property declarations
  title = 'practiceApp';
  data: string ='';
  fname:any
  lname: any
  password:any
  value:any
  //declaring form control object
  testPro = new FormControl('');
  //declaring form group instance
  profileForm = new FormGroup(
    {
      firstName : new FormControl('',Validators.required),
      lastName: new FormControl('',Validators.required)
      
    }
  )

  //declaring the form group instance using form builder

  personForm = this.fb.group({
    fname: [''],
    lname: [''],
    address: this.fb.group({
      street:[''],
      city: [''],
      state:[''],
      pin:['']
    })
  })
  

  constructor(private route:Router, private httpClient: HttpClient, private fb: FormBuilder, private dialog: MatDialog){}
  //different method declarations

  
  //this method is used to know the usage of navigatByUrl 
  goToRoute(url:string = '/third'):void{
    this.route.navigateByUrl(url).then(()=>{
      console.log(this.route.url);
    })
  }
  //this is used to make a sync post call using subscribe method(observables)
  postRequest(){
    console.log('post method is called')
    this.httpClient.post<any>('https://reqres.in/api/users',{name:'rishis'}).subscribe((response)=>{value:response});
  
  }
  ModifyValue(){
    this.testPro.setValue('Hello world');
  }

  ClearValue(){
    this.testPro.setValue('');
  }
  onSubmit(){
    
    this.fname= this.profileForm.value.firstName
    this.lname= this.profileForm.value.lastName
    this.httpClient.post<any>('https://reqres.in/api/users',{firstname:this.fname,lastname:this.lname }).subscribe((response)=>{value:response});
    console.log(this.profileForm.value)
    this.dialog.open(ThirdComponent,{
      width: "200px",
      // data: "Right click"
    })

  }
  
}
