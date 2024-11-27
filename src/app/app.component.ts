import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Task } from './shared/models'



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss',
})
export class AppComponent {

  title = 'My frist Angular Application';
  counter = 0
  constructor(private titleService: Title) { }
  newTask = ''






  ngOnInit() {
    this.titleService.setTitle(this.title);
  }
  onButtonClick() {
    this.title = this.title === "Change!!" ? "My frist Angular Application" : "Change!!"
  }

  sumCounter(value: number) {
    this.counter = this.counter + value
  }





}
