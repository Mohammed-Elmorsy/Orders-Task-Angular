import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// primeng modules
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';

// components
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { OrdersComponent } from './orders/orders.component';
import { PaymentSummaryComponent } from './payment-summary/payment-summary.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    OrdersComponent,
    PaymentSummaryComponent
  ],
  imports: [
    BrowserModule,

    ButtonModule,
    TableModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
