import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CutiService } from './../cuti.service';
import { Cuti } from './../cuti';

@Component({
  selector: 'app-edit-cuti',
  templateUrl: './edit-cuti.component.html',
  styleUrls: ['./edit-cuti.component.css']
})
export class EditCutiComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private CutiService: CutiService
  ) { }

  ngOnInit() {
    this.getSingleCuti();
  }

  model = new Cuti();
  no_induk =  this.route.snapshot.params['no_induk'];
  getSingleCuti(){

    this.CutiService
    .getDetailCuti(this.no_induk)
    .subscribe(cuti =>{ this.model = cuti[0];
    })
  };

  updateCuti(){
  this.CutiService
  .updateCuti(this.model)
  .subscribe(()=> this.goBack());
}

goBack(){
  this.router.navigate(['/data-cuti']);
}

}
