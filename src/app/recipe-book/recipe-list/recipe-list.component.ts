import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  public recipes : Recipe[] = [
    new Recipe('test Recipe', 'this is a test', 'https://static01.nyt.com/images/2022/03/23/dining/18Apperex/merlin_202627638_8d05e37f-bba7-4295-a738-138f7f208131-articleLarge.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
