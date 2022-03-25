import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/Ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {

   ingredients : Ingredient[] = [
    new Ingredient('apples', 5),
    new Ingredient('oranges', 8)
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onIngredientAdded(ingredient : Ingredient){
    this.ingredients.push(ingredient);
  }

}
