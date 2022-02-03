import {Component, OnInit} from '@angular/core';
import {MatListItem} from "@angular/material/list";
import {Dish} from "../shared/dish";
import {dishes_data} from "../shared/data/dishes_data";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  //fields
  dishes: Dish[] = dishes_data;

  constructor() {
  }

  ngOnInit(): void {
  }

}
