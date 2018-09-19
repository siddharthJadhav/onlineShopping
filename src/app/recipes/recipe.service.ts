import { Recipe } from './recipe-list/recipe.model';
import { EventEmitter } from '@angular/core';

export class RecipeService {

    private racipeList: Recipe[] = [
        // tslint:disable-next-line:max-line-length
        new Recipe('A new Recipe', 'Its a simple description', 'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2017/05/american-style-pancakes.jpg?itok=_tikdZhR'),
        // tslint:disable-next-line:max-line-length
        new Recipe('A new Recipe 1 ', 'Its a simple description', 'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2017/05/american-style-pancakes.jpg?itok=_tikdZhR')
    ];

    recipeSelected = new EventEmitter<Recipe>();

    constructor() {}

    getRecipeList() {
        return this.racipeList.slice();
    }

}
