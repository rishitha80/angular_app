import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.scss']
})
export class ThirdComponent implements OnInit {

  constructor( private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

}
