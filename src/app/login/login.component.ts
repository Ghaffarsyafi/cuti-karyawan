import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  name:string;
  passwordnya:string;
  usernamenya:string;
  userFounded: boolean;
  userNotFounded: boolean;
  dashboard = ['/nav'];
  login = ['/login'];

  constructor(
     private http:Http,
     private router: Router,
     private route: ActivatedRoute) {
  }

  ngOnInit() {
     if (localStorage.getItem('userdata') == null) {
      console.log('proses dulu login');
    } else {
      console.log('tampilkan dashboard');
      this.router.navigate(this.dashboard);
    }
  }

getUser(username, password){
  console.log(username);
  this.http.get('http://localhost/ngcrud/getpatientserv.php?username='+username+' & password='+password)
    .map((res:Response) => res.json()).subscribe(data => this.checkUser(data));
}
    
checkUser(getReturn){
  if(getReturn.returnCode==111){
    this.userFounded=true;
    this.userNotFounded=false;
    this.passwordnya=getReturn.password;
    this.usernamenya=getReturn.username;
    localStorage.setItem('userdata', getReturn.pid);
    console.log('isi session: ' + localStorage.getItem('userdata') );

   
    this.router.navigate(this.dashboard);
  } else {
    this.userFounded=false;
    this.userNotFounded=true;
    this.passwordnya='';
    this.usernamenya='';
  }
}

}
