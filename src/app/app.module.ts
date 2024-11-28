import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { TodoListComponent } from './components/todolist/todolist.component';
import { CounterComponent } from './components/counter/counter.component';
import { HeroComponent } from './components/heros/hero/hero.component';
import { ListComponent } from './components/heros/list/list.component';
import { DbzModule } from './dbz/dbz.module';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    CounterComponent,
    HeroComponent,
    ListComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, DbzModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
