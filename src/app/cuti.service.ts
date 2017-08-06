import { Injectable } from '@angular/core';
import { Http } from '@angular/http'; //import 
import 'rxjs/add/operator/map';

@Injectable()
export class CutiService {
cuti=[];
 
constructor( private http: Http ) { }

checkMe:any;
getCuti(){
  return this. http.get("http://localhost/ngcrud/selectcuti.php/")
  .map(res=>{

     this.checkMe = res;
       
     if(this.checkMe._body !== "0"){
         return res.json()
      }
  });
}

getDetailCuti(no_induk){ //get di sini tidak boleh sama dengan get yang di atas
  return this.http.post("http://localhost/ngcrud/selectonecuti.php/",{'no_induk':no_induk})
  .map(res=>res.json());
}


addCuti(info){
  return this.http.post("http://localhost/ngcrud/insertcuti.php",info)
  .map(()=>"");
}

deleteCuti(no_induk){
  return this.http.post("http://localhost/ngcrud/deletecuti.php/",{'no_induk':no_induk}) //harus sama dengan yang di ts
  .map(()=>this.getCuti());
}

updateCuti(info){
  return this.http.post("http://localhost/ngcrud/updatecuti.php/", info)
  .map(()=>"");
}

}
