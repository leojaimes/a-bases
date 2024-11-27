import { Component } from "@angular/core";


@Component({
  selector:'counter',
  templateUrl: './counter.component.html'
})
export class CounterComponent {
  counter = 0



  sumCounter(value: number) {
    this.counter = this.counter + value
  }


}
