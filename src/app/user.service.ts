import { Injectable } from '@angular/core';
import { Http } from '@angular/http'; //import 
import 'rxjs/add/operator/map';

@Injectable()
export class UserService { 

user=[];

constructor(private http: Http ) { 

  }
checkMe:any;


addUser(info){
  return this.http.post("http://localhost/ngcrud/insertuser.php",info)
  .map(()=>"");
}

}
