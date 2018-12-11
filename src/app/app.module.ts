import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EnvelopeComponent } from './envelope/envelope.component';
import { EnvelopeListComponent } from './envelope/envelope-list/envelope-list.component';
import { EnvelopeItemComponent } from './envelope/envelope-list/envelope-item/envelope-item.component';
import { ExpenseEditComponent } from './expense/expense-list/expense-edit/expense-edit.component';
import { ExpenseListComponent } from './expense/expense-list/expense-list.component';
import { EnvelopeDetailComponent } from './envelope/envelope-detail/envelope-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    EnvelopeComponent,
    EnvelopeListComponent,
    EnvelopeItemComponent,
    ExpenseEditComponent,
    ExpenseListComponent,
    EnvelopeDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
