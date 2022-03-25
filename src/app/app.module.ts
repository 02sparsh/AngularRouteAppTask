import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { BankingComponent } from './banking/banking.component';
import { CardComponent } from './card/card.component';
import { EmiappComponent } from './emiapp/emiapp.component';
import { routes } from './routing';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    BankingComponent,
    CardComponent,
    EmiappComponent
  ],
  imports: [
    BrowserModule,FormsModule,RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
