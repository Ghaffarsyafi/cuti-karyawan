import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { KryService } from './../kry.service';
import { Karyawan } from './../karyawan';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor( 
    private router: Router,
    private route: ActivatedRoute,
    private kryService: KryService
  ) { }

  ngOnInit() {
    this.getSingleKaryawan();
  }

  model = new Karyawan();
  id =  this.route.snapshot.params['id'];
  getSingleKaryawan(){

    this.kryService 
    .getDetailKaryawan(this.id)
    .subscribe(karyawan =>{ this.model = karyawan[0];
    })
  };

updateKaryawan(){
  this.kryService
  .updateKaryawan(this.model)
  .subscribe(()=> this.goBack());
}

goBack(){
  this.router.navigate(['/data']);
}
}
