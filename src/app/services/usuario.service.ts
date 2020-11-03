import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Storage } from '@ionic/storage';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  token: string = null;

  constructor(private http:HttpClient, private storage: Storage) { }

  login(email: string, password: string){
    const data = {email, password};

    this.http.post(URL + '/user/login', data).subscribe( resp => {
        console.log(resp);
      
    } )

  }

}
