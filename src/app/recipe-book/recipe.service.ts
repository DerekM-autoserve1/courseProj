import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Ingredient } from "../shared/Ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {
    recipesChanged = new Subject<Recipe[]>();

    private recipes : Recipe[] = [
        new Recipe(
            'Spicy Cauliflower wrap', 
            'Tasty and veggielicious', 
            'https://static01.nyt.com/images/2022/03/23/dining/18Apperex/merlin_202627638_8d05e37f-bba7-4295-a738-138f7f208131-articleLarge.jpg',
            [
                new Ingredient('cauliflower', 10),
                new Ingredient('sauce', 8)
            ]),
        new Recipe(
            'Its a pizza duh', 
            'with mushrroms and nice leaves what could go wrong', 
            'https://www.simplyrecipes.com/thmb/JWjdE8YwikAae0KZuyy6ZJW7Utw=/3000x2001/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Homemade-Pizza-Dough-Lead-Shot-1c-c2b1885d27d4481c9cfe6f6286a64342.jpg',
            [
                new Ingredient('mushroom', 8),
                new Ingredient('leaves', 12)

            ])
      ];

      constructor(private slService : ShoppingListService){}

      getRecipes(){
          return this.recipes.slice();
      }

      getRecipe(id: number){
          return this.recipes[id];
      }

      addIngredientsToShopList(ingredients : Ingredient[]){
        this.slService.addIngredients(ingredients);
      }

      addRecipe(recipe:Recipe){
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
      }

      updateRecipe(index: number, newRecipe:Recipe){
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
      }
}