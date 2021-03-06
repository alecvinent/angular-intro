import {Component, OnInit} from '@angular/core';
import {Dish} from "../shared/custom_types";
import {DISHES} from "../shared/data/dishes_data";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  //fields
  dishes: Array<Dish>;
  selectedDish: Dish;

  constructor() {
    this.dishes = DISHES;
    this.selectedDish = DISHES[0];
  }

  ngOnInit(): void {
    console.log(this.dishes.length + ' elements loaded');
  }

  onSelect(dish: Dish){
    this.selectedDish = dish;
  }

}
