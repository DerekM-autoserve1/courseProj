import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/Ingredient.model";

export class ShoppingListService{
    ingredientsChanged = new EventEmitter<Ingredient[]>();


    private ingredients : Ingredient[] = [
        new Ingredient('apples', 5),
        new Ingredient('oranges', 8)
      ];

      getIngredients(){
          return this.ingredients.slice();
      }

      addIngredient(ingredient:Ingredient){
        this.ingredients.push(ingredient);
        this.ingredientsChanged.emit(this.ingredients.slice());
      }

      addIngredients( ingredients : Ingredient[]){
        for(let ingredient of ingredients){
          this.addIngredient(ingredient);
        }
        //Seperate solution and preferred one in course did not work.
        //this.ingredients.push(...ingredients);
        //this.ingredientsChanged.emit(this.ingredients.slice());
      }
    
}