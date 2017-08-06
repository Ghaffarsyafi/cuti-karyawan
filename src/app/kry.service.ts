import { Injectable } from '@angular/core';
import { Http } from '@angular/http'; //import 
import 'rxjs/add/operator/map';

@Injectable()
export class KryService {
karyawan=[]; //

constructor( private http: Http ) { 

  }

checkMe:any;
getKaryawan(){
  return this. http.get("http://localhost/ngcrud/select.php/")
  .map(res=>{

     this.checkMe = res;
       
     if(this.checkMe._body !== "0"){
         return res.json()
      }
  });
}

getDetailKaryawan(id){ //get di sini tidak boleh sama dengan get yang di atas
  return this.http.post("http://localhost/ngcrud/selectone.php/",{'id':id})
  .map(res=>res.json());
}

addKaryawan(info){
  return this.http.post("http://localhost/ngcrud/insert.php",info)
  .map(()=>"");
}
deleteKaryawan(id){
  return this.http.post("http://localhost/ngcrud/delete.php/",{'id':id}) //harus sama dengan yang di ts
  .map(()=>this.getKaryawan());
}

updateKaryawan(info){
  return this.http.post("http://localhost/ngcrud/update.php/", info)
  .map(()=>"");
}

}
