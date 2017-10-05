import { ProvidersService } from './services/providers.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProvidersComponent } from './providers/providers/providers.component';

@NgModule({
  declarations: [
    AppComponent,
    ProvidersComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ProvidersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
