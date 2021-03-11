import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgIFComponent } from './ng-if/ng-if.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule}  from '@angular/forms';
import { SelectControlComponent } from './select-control/select-control.component';
import { UsersComponent } from './Components/users/users.component';
import { HomeComponent } from './Components/home/home.component';
import { PipeDemoPipe } from './Pipes/pipe-demo.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NgIFComponent,
    SelectControlComponent,
    UsersComponent,
    HomeComponent,
    PipeDemoPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
