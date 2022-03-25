import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  
  public recipes : Recipe[] = [
    new Recipe('test Recipe', 'this is a test', 'https://static01.nyt.com/images/2022/03/23/dining/18Apperex/merlin_202627638_8d05e37f-bba7-4295-a738-138f7f208131-articleLarge.jpg'),
    new Recipe('GAGN', 'BIG DOINKS', 'https://www.simplyrecipes.com/thmb/JWjdE8YwikAae0KZuyy6ZJW7Utw=/3000x2001/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Homemade-Pizza-Dough-Lead-Shot-1c-c2b1885d27d4481c9cfe6f6286a64342.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe : Recipe){
    this.recipeWasSelected.emit(recipe);
  }

}
