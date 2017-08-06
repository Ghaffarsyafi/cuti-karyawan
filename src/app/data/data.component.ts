import { Component, OnInit } from '@angular/core';
import { KryService } from './../kry.service'; // import
import { Karyawan } from './../karyawan'; // import 
import {ActivatedRoute, Params, Router } from '@angular/router'; // import Router

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  karyawan: any; // variable, ini nanti juga di panggil di ngFor
  login = ['/login'];
  


  constructor(
    private _kryService: KryService,  // 
    private _router: Router,
    private route: ActivatedRoute  ,
    private router: Router      // 
  ) { }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers'
    };
       this.getKaryawan();
  }

  getKaryawan(){
    this._kryService.getKaryawan()
    .subscribe(karyawan => {
      this.karyawan = karyawan;
    })
  }

  deleteKaryawan(id){ // delete di sni harus sama dengan yang di service
    this._kryService
    .deleteKaryawan(id)
    .subscribe(() => {
    this.getKaryawan();
    })
  }
}
