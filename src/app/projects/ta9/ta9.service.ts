import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MyType } from '../stanley/myType.modal';
import { clientInfo } from './clientInfo.model';

@Injectable({
  providedIn: 'root'
})
export class Ta9Service {
  ipAddress='';
constructor(private http:HttpClient){};

postUserInfo( client: clientInfo){
  return this.http.post<clientInfo>('http://s1.pakdim.com/clients', client)
};

getIPAddress(){
return this.http.get('http://api.ipify.org/?format=json')
};

keepAlive(id:any){
return this.http.patch('http://s1.pakdim.com/clients/'+ id + '/keepAlive',null)
};
getMessage():Observable<MyType>{
 return this.http.get<MyType>('http://s1.pakdim.com/messages')
};
getClientInfo(){
  return this.http.get('http://s1.pakdim.com/clients');
}

}