import { Injectable } from '@angular/core';

@Injectable()
export class ProvidersService {

  providers: any = [
    {
      name: 'Telefónica',
      cif: 'B12345678',
      address: 'Paseo de la Castellana, 100',
      zip: '28.010',
      city: 'Madrid',
      state: 'Madrid',
      phone: 911111111,
      email: 'info@telefonica.com',
      contact: 'Juan Pérez'
    },
    {
      name: 'Iberdrola',
      cif: 'B87654321',
      address: 'Príncipe de Vergara, 200',
      zip: '28.015',
      city: 'Madrid',
      state: 'Madrid',
      phone: 922222222,
      email: 'info@iberdrola.com',
      contact: 'Laura Martínez'
    }
  ];

  constructor() { }

  getProviders() {
    return this.providers;
  }

}
