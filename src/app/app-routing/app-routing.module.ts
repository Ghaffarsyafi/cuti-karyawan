import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes,  RouterModule } from '@angular/router'; //import 
import { DataComponent } from './../data/data.component';
import { AddComponent } from './../add/add.component'; 
import { EditComponent } from './../edit/edit.component';
import { ShowKaryawanComponent } from './../show-karyawan/show-karyawan.component';
import { NavComponent } from './../nav/nav.component';
import { LoginComponent } from './../login/login.component';
import { HomeComponent } from './../home/home.component';

import { AddUserComponent } from './../add-user/add-user.component';
import { DataCutiComponent} from './../data-cuti/data-cuti.component';
import { AddCutiComponent } from './../add-cuti/add-cuti.component'; 
import { EditCutiComponent } from './../edit-cuti/edit-cuti.component';
import { ShowCutiComponent } from './../show-cuti/show-cuti.component';


// buat arrray yang bernama routes, berisi path url
const routes: Routes = [      
  {path: "", redirectTo:"/login", pathMatch: "full"},
  {path: "login", component:LoginComponent},
  {path: "home", component:HomeComponent},
  {path: "nav", component:NavComponent},

  {path: "data", component:DataComponent},
  {path: "add", component:AddComponent},
  {path: "edit/:id", component:EditComponent},
  {path: "show-karyawan/:id", component:ShowKaryawanComponent},

  {path: "add-user", component:AddUserComponent},
  {path: "data-cuti", component:DataCutiComponent},
  {path: "add-cuti", component:AddCutiComponent},
  {path: "edit-cuti/:no_induk", component:EditCutiComponent},
  {path: "show-cuti/:no_induk", component:ShowCutiComponent}

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes) //di gunakan untuk meregister path 
  ],

  exports:[RouterModule], //export yang ada di ngModule
  declarations: []
})
export class AppRoutingModule {
  
 }

