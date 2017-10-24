import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-addprovider',
  templateUrl: './addprovider.component.html',
  styleUrls: ['./addprovider.component.css']
})
export class AddproviderComponent implements OnInit {

  @ViewChild('formpro') formpro: NgForm;
  provider: any;

  states: string[] = [ 'Álava', 'Albacete', 'Alicante', 'Almería', 'Asturias', 'Ávila', 'Badajoz',
  'Barcelona', 'Burgos', 'Cáceres', 'Cádiz', 'Cantabria', 'Castellón', 'Ciudad Real', 'Córdoba',
  'La Coruña', 'Cuenca', 'Gerona', 'Granada', 'Guadalajara', 'Guipúzcoa', 'Huelva', 'Huesca',
  'Islas Baleares', 'Jaén', 'León', 'Lérida', 'Lugo', 'Madrid', 'Málaga', 'Murcia', 'Navarra', 'Orense',
  'Palencia', 'Las Palmas', 'Pontevedra', 'La Rioja', 'Salamanca', 'Segovia', 'Sevilla', 'Soria',
  'Tarragona', 'Santa Cruz de Tenerife', 'Teruel', 'Toledo', 'Valencia', 'Valladolid', 'Vizcaya',
  'Zamora', 'Zaragoza' ];

  constructor() {
    this.provider = {
      name: '',
      cif: '',
      address: '',
      zip: '',
      city: '',
      state: '',
      phone: null,
      email: '',
      contact: ''
    };
  }

  ngOnInit() {
  }

  onSubmit() {
    this.provider.name = this.formpro.value.name;
    this.provider.cif = this.formpro.value.cif;
    this.provider.address = this.formpro.value.address;
    this.provider.zip = this.formpro.value.zip;
    this.provider.city = this.formpro.value.city;
    this.provider.state = this.formpro.value.state;
    this.provider.phone = this.formpro.value.phone;
    this.provider.email = this.formpro.value.email;
    this.provider.contact = this.formpro.value.contact;

    this.formpro.reset();
  }
}
