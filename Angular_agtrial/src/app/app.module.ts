import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{ AgGridAngular} from 'ag-grid-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgGridAngular,
    HttpClientModule
  ],
 // providers: [{provide: HTTP_INTERCEPTORS,useClass:TokenInterceptorService,multi:true}],
  providers:[],
  bootstrap: [AppComponent]
})
export class AppModule { }
