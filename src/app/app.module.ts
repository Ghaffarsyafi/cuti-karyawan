import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { DataTablesModule } from 'angular-datatables';


import { AppRoutingModule } from './app-routing/app-routing.module'; //import file dan nama class nya

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { DataComponent } from './data/data.component';

import { KryService } from './kry.service';
import { UserService} from './user.service';
import { CutiService } from './cuti.service';

import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { ShowKaryawanComponent } from './show-karyawan/show-karyawan.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AddUserComponent } from './add-user/add-user.component';
import { DataCutiComponent } from './data-cuti/data-cuti.component';
import { AddCutiComponent } from './add-cuti/add-cuti.component';
import { EditCutiComponent } from './edit-cuti/edit-cuti.component';
import { ShowCutiComponent } from './show-cuti/show-cuti.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    DataComponent,
    AddComponent,
    EditComponent,
    ShowKaryawanComponent,
    HomeComponent,
    LoginComponent,
    AddUserComponent,
    DataCutiComponent,
    AddCutiComponent,
    EditCutiComponent,
    ShowCutiComponent
    
    
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    DataTablesModule,
    AppRoutingModule //import yang di atas di daftarkan di sini
  ],
  providers: [KryService, UserService, CutiService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
