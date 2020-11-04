import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from '../../interfaces/interfaces';
import { PostsService } from '../../services/posts.service';
import { Geolocation } from '@ionic-native/geolocation/ngx';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  tempImages: string[] = [];
  cargandoGeo = false;
  post = {
    mensaje: '',
    coords: null,
    posicion: false
  }

  constructor(private postService: PostsService, private route: Router, private geolocation: Geolocation) {}

  async crearPost(){
    console.log(this.post);
    const creado = await this.postService.crearPost(this.post);
    this.post = {
      mensaje: '',
      coords: null,
      posicion: false
    }
    this.route.navigateByUrl('/main/tabs/tab1');
  }

  getGeo(){
    if(!this.post.posicion){
      this.post.coords = null;
      return;
    }
    this.cargandoGeo = true;
    this.geolocation.getCurrentPosition().then((resp) => {
      // resp.coords.latitude
      // resp.coords.longitude
      this.cargandoGeo = false;
      const coords = resp.coords.latitude + "," + resp.coords.longitude;
      console.log(coords);
      
    }).catch((error) => {
      console.log('Error getting location', error);
      this.cargandoGeo = false;
    });
    
  }
}
