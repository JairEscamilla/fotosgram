import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './post/post.component';
import { PostsComponent } from './posts/posts.component';
import { IonicModule } from '@ionic/angular';
import { PipesModule } from '../pipes/pipes.module';



@NgModule({
  declarations: [PostComponent, PostsComponent],
  imports: [
    CommonModule,
    IonicModule,
    PipesModule
  ],
  exports: [
    PostsComponent
  ]
})
export class ComponentsModule { }
