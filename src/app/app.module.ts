import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms'
import { TodoListComponent } from './components/todolist/todolist.component';
import { CounterComponent } from "./components/counter/counter.component";



@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    CounterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,

],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
