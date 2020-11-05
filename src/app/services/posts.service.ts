import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { RespuestaPosts, Post } from '../interfaces/interfaces';
import { UsuarioService } from './usuario.service';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';


const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  paginaPosts = 0;
  nuevoPost = new EventEmitter<Post>();

  constructor(private http: HttpClient, private usuarioService: UsuarioService, private fileTransfer: FileTransfer) { }

  getPosts(pull:boolean = false){ 
    if(pull){
      this.paginaPosts = 0;
    }
    this.paginaPosts++;
    return this.http.get<RespuestaPosts>(URL + "/posts/?pagina=" + this.paginaPosts);
  }

  crearPost(post){
    const headers = new HttpHeaders({
      'x-token': this.usuarioService.token
    })
    return new Promise(resolve => {
      this.http.post(URL + '/posts', post, { headers }).subscribe(resp => {
        
        this.nuevoPost.emit(resp['post']);
        resolve(true);
      });
    })
    
  }

  subirImagen(img: string){
    const options: FileUploadOptions = {
      fileKey: 'image',
      headers: {
        'x-token': this.usuarioService.token
      }
    };

    const fileTransfer: FileTransferObject = this.fileTransfer.create();
    fileTransfer.upload(img, URL + '/post/upload', options).then( data => {
      console.log(data);
      
    }).catch( error => {
      console.log(error);
      
    })

  }

}
