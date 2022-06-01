import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardModule } from 'primeng/card';
import {FormsModule} from '@angular/forms';
import {InputTextModule} from 'primeng-lts/inputtext';
import {TableModule} from 'primeng/table';
import { ProductItemService } from './product-Item-service';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    TableModule,
    InputTextModule,
    FormsModule,
    CardModule
  ],
  providers: [ProductItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
