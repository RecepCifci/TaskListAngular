import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskComponent } from './Task/Task.component';
import { NavComponent } from './nav/nav.component';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TaskcreateComponent } from './taskcreate/taskcreate.component';
import { CategoryComponent } from './category/category.component';
import { TaskConverterPipe } from './Pipes/task-converter.pipe';


@NgModule({
  declarations: [		
    AppComponent,
      TaskComponent,
      NavComponent,
      TaskcreateComponent,
      CategoryComponent,
      TaskConverterPipe
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
