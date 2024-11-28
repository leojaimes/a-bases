import { Component } from '@angular/core';
import { Task } from '../../shared/models/tasks.interfaces';

@Component({
  selector: 'todo-list',
  templateUrl: './todolist.component.html',
  standalone: false,
  styleUrl: './todolist.component.scss',
})
export class TodoListComponent {
  items = [] as Task[];

  newTask = '';

  addNewTask() {
    this.items.push({
      completed: false,
      name: this.newTask.trim(),
    });
    this.newTask = '';
  }

  completeTask(task: Task) {
    this.items = this.items.map((item) =>
      item.name === task.name ? { ...item, completed: !task.completed } : item
    );
  }

  deleteTask(task: Task) {
    this.items = this.items.filter((item) => item.name !== task.name);
  }
}
