import { Subject } from "rxjs";
import { Ingredient } from "../shared/Ingredient.model";

export class ShoppingListService{
    ingredientsChanged = new Subject<Ingredient[]>();
    startedEditing = new Subject<number>();


    private ingredients : Ingredient[] = [
        new Ingredient('apples', 5),
        new Ingredient('oranges', 8)
      ];

      getIngredients(){
          return this.ingredients.slice();
      }

      getIngredient(index:number){
        return this.ingredients[index];
      }

      updateIngredient(index:number, newIngredient:Ingredient){
        this.ingredients[index] = newIngredient;
        this.ingredientsChanged.next(this.ingredients.slice());
      }

      addIngredient(ingredient:Ingredient){
        this.ingredients.push(ingredient);
        this.ingredientsChanged.next(this.ingredients.slice());
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