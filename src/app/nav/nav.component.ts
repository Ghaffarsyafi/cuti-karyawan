import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  nav = ['/nav'];
  login = ['/login'];
 

  constructor( 
    private route: ActivatedRoute,
    private router: Router) { 
    }

  ngOnInit() {
    if (localStorage.getItem('userdata') == null) {
      this.router.navigate(this.login);
    } else {
      // console.log('tampilkan dashboard');
      // this.router.navigate(this.nav);
    }
    
  }

  logOut(){
   localStorage.clear();
   this.router.navigate(this.login);
  }

    gotoPeoplesList(){
    let link = ['/login'];
    this.router.navigate(link);
  }

}
