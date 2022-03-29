import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { RecipeService } from "../recipe-book/recipe.service";
import { Recipe } from "../recipe-book/recipe.model";
import { map } from "rxjs/operators";

@Injectable({providedIn: 'root'})
export class DataStorageService {
    constructor(private http: HttpClient, private recipeService: RecipeService) {}

    storeRecipes() {
        const recipes = this.recipeService.getRecipes();
        this.http.put(
            'https://ng-course-recipe-book-c5ec0-default-rtdb.firebaseio.com/recipes.json', 
             recipes )
        .subscribe(response => {
            console.log(response);
        });
    }

    fetchRecipes(){
        this.http.get<Recipe[]>('https://ng-course-recipe-book-c5ec0-default-rtdb.firebaseio.com/recipes.json')
        //rxjs method map in pipe and one in return is a JS map
        .pipe(map(recipes => {
            return recipes.map( recipe => {
                return{...recipe, ingredients: recipe.ingredients ? recipe.ingredients:[] }
            });
        }))
        .subscribe(recipes =>{
            this.recipeService.setRecipes(recipes);
        })
    }
}