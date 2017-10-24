import { ProvidersService } from './services/providers.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProvidersComponent } from './providers/providers/providers.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { AddproviderComponent } from './providers/addprovider/addprovider.component';
import { AddbudgetComponent } from './budgets/addbudget/addbudget.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'providers', component: ProvidersComponent },
  { path: 'addprovider', component: AddproviderComponent },
  { path: 'addbudget', component: AddbudgetComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ProvidersComponent,
    HomeComponent,
    HeaderComponent,
    AddproviderComponent,
    AddbudgetComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ProvidersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
