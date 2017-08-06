import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Cuti } from './../cuti';
import { CutiService } from './../cuti.service';


@Component({
  selector: 'app-data-cuti',
  templateUrl: './data-cuti.component.html',
  styleUrls: ['./data-cuti.component.css']
})
export class DataCutiComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  cuti: any; // variable, ini nanti juga di panggil di ngFor
  login = ['/login'];

  constructor(
    private cutiService: CutiService,  
    private _router: Router,
    private route: ActivatedRoute  ,
    private router: Router      
   ) { }

  ngOnInit() {
      this.dtOptions = {
      pagingType: 'full_numbers'
    };
    this.getCuti();
  } 

  getCuti(){
    this.cutiService.getCuti()
    .subscribe(cuti => {
    this.cuti = cuti;
    
    })
  }

  deleteCuti(no_induk){ // delete di sni harus sama dengan yang di service
    this.cutiService
    .deleteCuti(no_induk)
    .subscribe(() => {
    this.getCuti();
    })
  }



}
