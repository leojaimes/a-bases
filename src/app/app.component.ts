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


  items = [

  ] as Task[]



  ngOnInit() {
    this.titleService.setTitle(this.title);
  }
  onButtonClick() {
    this.title = this.title === "Change!!" ? "My frist Angular Application" : "Change!!"
  }

  sumCounter(value: number) {
    this.counter = this.counter + value
  }


  addNewTask() {
    this.items.push({
      completed: false,
      name: this.newTask.trim()
    })
    this.newTask = ''
  }

  completeTask(task: Task) {
    this.items = this.items.map(item =>
      item.name === task.name ? { ...item, completed: true } : item
    );

  }

  deleteTask(task: Task) {
    this.items = this.items.filter(item => item.name !== task.name );
  }


}
