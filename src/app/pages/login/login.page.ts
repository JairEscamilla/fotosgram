import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IonSlides, NavController } from '@ionic/angular';
import { UsuarioService } from '../../services/usuario.service';
import { IonicStorageModule } from '@ionic/Storage';
import { UiServiceService } from '../../services/ui-service.service';
import { Usuario } from '../../interfaces/interfaces';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  @ViewChild('slidePrincipal') slides: IonSlides;

  loginUser = {
    email: "jairalan140w65@gmail.com",
    password: "12345"
  }

  registerUser: Usuario = {
    email: "pruebas",
    password: "asdasdasd",
    nombre: "jairo",
    avatar: "av-1.png"
  }

  constructor(private usuarioService: UsuarioService,
              private navCtrl: NavController,
              private uiService: UiServiceService) { }

  ngOnInit() {
  }

  ionViewDidEnter(){
    this.slides.lockSwipes(true)
  }

  async login(fLogin: NgForm){
    if(fLogin.invalid) return;
    const valido = await this.usuarioService.login(this.loginUser.email, this.loginUser.password);
   
    if(valido){
      // Navegar al tab
      this.navCtrl.navigateRoot('/main/tabs/tab1', {animated: true});
    }else{
      // Mostrar alerta
      this.uiService.alertaInformativa("Usuario y contraseña no son correctos");
    }
    
  }

  async registro(fRegistro: NgForm){
    if(fRegistro.invalid){ return; }
    const valido = await this.usuarioService.registro(this.registerUser);
    if (valido) {
      // Navegar al tab
      this.navCtrl.navigateRoot('/main/tabs/tab1', { animated: true });
    } else {
      // Mostrar alerta
      this.uiService.alertaInformativa("El correo electrónico ya existe");
    }
    
  }

  

  mostrarRegistro(){
    this.slides.lockSwipes(false);
    this.slides.slideTo(0)
    this.slides.lockSwipes(true);
  }

  mostrarLogin(){
    this.slides.lockSwipes(false);
    this.slides.slideTo(1)
    this.slides.lockSwipes(true);
  }

}
