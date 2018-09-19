import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  RecipeList: Recipe[];

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.RecipeList = this.recipeService.getRecipeList();
    console.log('recipe list: ', this.RecipeList);
  }

  selectRecipe(recipe) {
    console.log('recipe : ', recipe);
    this.recipeService.recipeSelected.emit(recipe);
  }

}
