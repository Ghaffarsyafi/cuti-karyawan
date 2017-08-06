import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CutiService } from './../cuti.service';
import { Cuti } from './../cuti';

@Component({
  selector: 'app-add-cuti',
  templateUrl: './add-cuti.component.html',
  styleUrls: ['./add-cuti.component.css']
})
export class AddCutiComponent implements OnInit {

home = ['/data-cuti'];  
  constructor(
    private CutiService: CutiService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  model = new Cuti();
  addCuti(){ // di samakan dengan submit di html-nya agar bisa input
    this.CutiService
    .addCuti(this.model)
    .subscribe(()=> this.goBack());
  }
  goBack(){
    this.router.navigate(this.home);
  }

}
