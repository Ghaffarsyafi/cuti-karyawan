import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { CutiService } from './../cuti.service';
import { Cuti } from './../cuti';

@Component({
  selector: 'app-show-cuti',
  templateUrl: './show-cuti.component.html',
  styleUrls: ['./show-cuti.component.css']
})
export class ShowCutiComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private CutiService: CutiService 
  ) { }

  ngOnInit() {
    this.getDetailCuti();
  }

  cuti: Cuti;
  getDetailCuti(){
    var no_induk = this.route.snapshot.params['no_induk'];
    this.CutiService
    .getDetailCuti(no_induk)
    .subscribe(Cuti => {this.cuti = Cuti[0];})
  }

  goBack(){
    this.router.navigate(['/data-cuti']);
  }

}
