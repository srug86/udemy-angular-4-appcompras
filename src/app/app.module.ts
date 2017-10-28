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

import { ProvidersService } from './services/providers.service';
import { BudgetsService } from './services/budgets.service';
import { BudgetsComponent } from './budgets/budgets/budgets.component';
import { EditbudgetComponent } from './budgets/editbudget/editbudget.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'providers', component: ProvidersComponent },
  { path: 'addprovider', component: AddproviderComponent },
  { path: 'addbudget', component: AddbudgetComponent },
  { path: 'budgets', component: BudgetsComponent },
  { path: 'editbudget/:id', component: EditbudgetComponent },
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
    EditbudgetComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [ProvidersService, BudgetsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
