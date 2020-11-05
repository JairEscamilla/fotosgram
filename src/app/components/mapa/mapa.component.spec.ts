import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MapaComponent } from './mapa.component';

describe('MapaComponent', () => {
  let component: MapaComponent;
  let fixture: ComponentFixture<MapaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapaComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MapaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
