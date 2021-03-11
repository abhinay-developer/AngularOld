import { Component, OnInit } from '@angular/core';

class Gender{
  male:string;
  female:string;
  none:string;
}
@Component({
  selector: 'app-select-control',
  templateUrl: './select-control.component.html',
  styleUrls: ['./select-control.component.css']
})
export class SelectControlComponent implements OnInit {
  genderType:Gender=new Gender();
  genderTypeItem:Gender[]=[];

  constructor() { 
  this.genderTypeItem.push(this.genderType);
  
    
  }

  ngOnInit(): void {
  }

}
