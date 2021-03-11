// import { UsersService } from './../../../AngularRouting/src/app/Services/users.service';
import { Component } from '@angular/core';
// import {HttpClient} from '@angular/common/http';
//  class PersonInfo{

//   firstname:string;
//   lastname:string;
//   email:string;
//  }

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularBasics';

//   firstName:string="abhinay";
//   username:string;
//   constructor(private httpApi:HttpClient,private userService:UsersService){
//     this.OnLoad();
//   }

// myName:string;
// ngOnInit(): void {
//   //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
//   //Add 'implements OnInit' to the class.
//   this.username=this.userService.name;
// }


//   persondata:PersonInfo=new PersonInfo();
//   persondata1:PersonInfo=new PersonInfo();
//   submittedpersondata:PersonInfo[]=[];
//    persondetails:string;
//   OnSubmit(){
//    this.persondata1=this.persondata;
//    this.submittedpersondata.push(this.persondata1);
//   }
  // OnLoad(){
  //   this.httpApi.get("https://reqres.in/api/users?page=2").subscribe((apidata:Response)=>{
  //         this.persondetails=apidata['data'];
          
  //         console.log(this.persondetails);
  //   })


  // }



public firstName:string="abhinay";
public price = 45000.40;

}