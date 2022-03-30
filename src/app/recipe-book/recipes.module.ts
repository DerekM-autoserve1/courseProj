import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { RecipeBookComponent } from "./recipe-book.component";
import { RecipeDetailComponent } from "./recipe-detail/recipe-detail.component";
import { RecipeEditComponent } from "./recipe-edit/recipe-edit.component";
import { RecipeItemComponent } from "./recipe-list/recipe-item/recipe-item.component";
import { RecipeListComponent } from "./recipe-list/recipe-list.component";
import { RecipeStartComponent } from "./recipe-start/recipe-start.component";

@NgModule({
    declarations:[
        RecipeBookComponent,
        RecipeListComponent,
        RecipeDetailComponent,  
        RecipeItemComponent,
        RecipeStartComponent,
        RecipeEditComponent,
    ],
    imports: [
        RouterModule,
        FormsModule,
        BrowserModule,
        HttpClientModule,
        ReactiveFormsModule
    ],
    exports: [
        RecipeBookComponent,
        RecipeListComponent,
        RecipeDetailComponent,  
        RecipeItemComponent,
        RecipeStartComponent,
        RecipeEditComponent, 
    ]
})
export class RecipesModule{}