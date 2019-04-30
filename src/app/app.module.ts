import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { OdefComponent } from './odef/odef.component';
import { AppRoutingModule } from './app-routing.module';
import { OdefDetailComponent } from './odef-detail/odef-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { OdefSearchComponent } from './odef-search/odef-search.component';

@NgModule({
  declarations: [
    AppComponent,
    OdefComponent,
    OdefDetailComponent,
    MessagesComponent,
    OdefSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
