import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppTag } from './app.tag';

const routes: Routes = [];

@NgModule({
  declarations: [
    AppTag
  ],
  imports: [
    RouterModule.forRoot([]),
    HttpClientModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppTag]
})
export class AppModule { }
