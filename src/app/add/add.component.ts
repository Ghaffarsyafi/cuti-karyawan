import { Component, OnInit } from '@angular/core';
import { KryService } from './../kry.service'; //
import { Karyawan } from './../karyawan'; //
import { ActivatedRoute, Params, Router } from '@angular/router';  //

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  home = ['/data'];
  constructor(
    private kryService: KryService,
    private router: Router
    
  ) { }

  ngOnInit() {
  }

model = new Karyawan();
  addKaryawan(){ // di samakan dengan submit di html-nya agar bisa input
    this.kryService
    .addKaryawan(this.model)
    .subscribe(()=> this.goBack());
  }
  goBack(){
    this.router.navigate(this.home);
  }
}
