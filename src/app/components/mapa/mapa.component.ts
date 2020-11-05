import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

declare var mapboxgl: any;

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.scss'],
})
export class MapaComponent implements OnInit {

  @Input() coords: string;
  @ViewChild('mapa', {static: true}) mapa: ElementRef;

  constructor() { }

  ngOnInit() {
    const latLng = this.coords.split(",");
    const lat = Number(latLng[0]);
    const lng = Number(latLng[1]);

    mapboxgl.accessToken = 'pk.eyJ1IjoiamFpcjE0IiwiYSI6ImNraDQ2Z2tlMjBuazkydXA2OHFhZmh2d3oifQ.3coP2xzbNl39ntG20531Iw';
    const  map = new mapboxgl.Map({
      container: this.mapa.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: 15
    });

    const marker = new mapboxgl.Marker().setLngLat([lng, lat]).addTo(map);

  }


}
