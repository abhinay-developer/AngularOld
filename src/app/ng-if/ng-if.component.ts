import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.css']
})
export class NgIFComponent implements OnInit {

  constructor() { }


  show: boolean = true;

  showData:boolean=true;
  ngOnInit(): void {
  }

}
