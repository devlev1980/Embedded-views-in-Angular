import {Component, DoCheck, OnInit} from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
    <h2>
      child works!
    </h2>
  `,
  styles: []
})
export class ChildComponent implements OnInit,DoCheck {

  constructor() { }

  ngOnInit(): void {
  }

  ngDoCheck(): void {
    console.log('ChildComponent Checked')
  }
}
