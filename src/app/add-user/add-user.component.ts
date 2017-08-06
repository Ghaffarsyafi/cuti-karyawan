import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { UserService } from './../user.service';
import { User } from './../user';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  home = ['/home'];
  constructor(
    private UserService: UserService,
    private router: Router
  ) { }
 
  ngOnInit() {
  }

model = new User();
  addUser(){ // di samakan dengan submit di html-nya agar bisa input
    this.UserService
    .addUser(this.model)
    .subscribe(()=> this.goBack());
  }
  goBack(){
    this.router.navigate(this.home);
  }

}
