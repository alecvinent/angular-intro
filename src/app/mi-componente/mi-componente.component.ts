import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'mi-componente',
  templateUrl: './mi-componente.component.html',
  styleUrls: ['./mi-componente.component.scss']
})
export class MiComponenteComponent implements OnInit {
  // fields
  counter: number;
  colors:Array<string>;
  colorSelected: string;

  constructor() {
    this.counter = 18;
    this.colors = ['green', 'white', 'yellow'];
    this.colorSelected = this.colors[0];
  }

  ngOnInit(): void {
    console.log('MiComponenteComponent loaded');
  }

  addCount(){
    this.counter += 1;
  }

  minusCount(){
    this.counter -= 1;
  }

  changeBackground(){
    console.log('changeBackground');
  }

}
