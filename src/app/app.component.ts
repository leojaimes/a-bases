import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Task } from './shared/models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'My frist Angular Application';

  constructor(private titleService: Title) {}

  ngOnInit() {
    this.titleService.setTitle(this.title);
  }
}
