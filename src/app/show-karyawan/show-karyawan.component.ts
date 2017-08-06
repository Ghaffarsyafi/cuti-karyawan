import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { KryService } from './../kry.service';
import { Karyawan } from './../karyawan';


@Component({
  selector: 'app-show-karyawan',
  templateUrl: './show-karyawan.component.html',
  styleUrls: ['./show-karyawan.component.css']
})
export class ShowKaryawanComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private kryService: KryService
  ) { }

  ngOnInit() {
    this.getDetailKaryawan();
  }

  karyawan: Karyawan;
  getDetailKaryawan(){
    var id = this.route.snapshot.params['id'];
    this.kryService
    .getDetailKaryawan(id)
    .subscribe(karyawan => {this.karyawan = karyawan[0];})
  }

  goBack(){
    this.router.navigate(['/data']);
  }

}
