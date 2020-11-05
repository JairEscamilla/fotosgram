import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './post/post.component';
import { PostsComponent } from './posts/posts.component';
import { IonicModule } from '@ionic/angular';
import { PipesModule } from '../pipes/pipes.module';
import { AvatarSelectorComponent } from './avatar-selector/avatar-selector.component';
import { MapaComponent } from './mapa/mapa.component';



@NgModule({
  declarations: [PostComponent, PostsComponent, AvatarSelectorComponent, MapaComponent],
  imports: [
    CommonModule,
    IonicModule,
    PipesModule,
  ],
  exports: [
    PostsComponent,
    AvatarSelectorComponent
  ]
})
export class ComponentsModule { }
