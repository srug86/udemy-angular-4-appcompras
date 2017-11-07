import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ProvidersComponent } from './providers/providers/providers.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { AddproviderComponent } from './providers/addprovider/addprovider.component';
import { AddbudgetComponent } from './budgets/addbudget/addbudget.component';
import { BudgetsComponent } from './budgets/budgets/budgets.component';
import { EditbudgetComponent } from './budgets/editbudget/editbudget.component';
import { RegistrationComponent } from './authentication/registration/registration.component';
import { LoginComponent } from './authentication/login/login.component';

import { ProvidersService } from './services/providers.service';
import { BudgetsService } from './services/budgets.service';
import { AuthenticationService } from './services/authentication.service';
import { GuardService } from './services/guard.service';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'providers', component: ProvidersComponent,
    canActivate: [GuardService]
  },
  {
    path: 'addprovider', component: AddproviderComponent,
    canActivate: [GuardService]
  },
  {
    path: 'addbudget', component: AddbudgetComponent,
    canActivate: [GuardService]
  },
  {
    path: 'budgets', component: BudgetsComponent,
    canActivate: [GuardService]
  },
  {
    path: 'editbudget/:id', component: EditbudgetComponent,
    canActivate: [GuardService]
  },
  { path: 'registration', component : RegistrationComponent },
  { path: 'login', component : LoginComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ProvidersComponent,
    HomeComponent,
    HeaderComponent,
    AddproviderComponent,
    AddbudgetComponent,
    BudgetsComponent,
    EditbudgetComponent,
    RegistrationComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [
    ProvidersService,
    BudgetsService,
    AuthenticationService,
    GuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
