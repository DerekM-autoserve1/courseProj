import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {

  public ingredients = [
    new Ingredient('apples', 5),
    new Ingredient('oranges', 8)
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
