import { HttpModule } from '@angular/http'; 
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }  from '@angular/forms';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
// import { MDBBootstrapModule } from 'angular-bootstrap-md';
// import { HttpClientModule } from '@angular/common/http';
// import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppComponent } from './app.component';
import { ContentChoicesComponent }  from './contentChoices.component';
//import { InMemoryDataService1} from './in-memory-data-service1';
//import { ImportExcel1Component } from './importExcel1.component';
import { DragAndDropModule } from 'angular-draggable-droppable';
//import { CatalogListSetComponent } from './catalog-list-set/catalog-list-set.component';
import { DacoFetchComponent } from './daco-fetch/daco-fetch.component';
//import { DropEvent } from 'angular-draggable-droppable';
// import  axios            from 'axios';  //needs to go into api-client
// import { AxiosInstance } from 'axios';  //needs to go into api-client
@NgModule({
  declarations: [
    AppComponent,
    DacoFetchComponent, // http api fetch data
    ContentChoicesComponent
    //CatalogListSetComponent  //gave up on componentizing cc pg df
  ],
  imports: [
    DragAndDropModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule    
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [],
  //providers: [InMemoryDataService1],
  bootstrap: [AppComponent]
})
export class AppModule { }
