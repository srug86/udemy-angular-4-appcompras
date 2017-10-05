import { ProvidersService } from './../../services/providers.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-providers',
  templateUrl: './providers.component.html',
  styleUrls: ['./providers.component.css']
})
export class ProvidersComponent implements OnInit {

  providers: any;

  constructor(private providersService: ProvidersService) { }

  ngOnInit() {
    this.providers = this.providersService.getProviders();
  }

}
