import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  racipeList: Recipe[] = [
    // tslint:disable-next-line:max-line-length
    new Recipe('A new Recipe', 'Its a simple description', 'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2017/05/american-style-pancakes.jpg?itok=_tikdZhR'),
    // tslint:disable-next-line:max-line-length
    new Recipe('A new Recipe 1 ', 'Its a simple description', 'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2017/05/american-style-pancakes.jpg?itok=_tikdZhR')
  ];

  @Output() selectedRecipe = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit() {
  }

  selectRecipe(recipe) {
    console.log('recipe : ', recipe);
    this.selectedRecipe.emit(recipe);
  }

}
