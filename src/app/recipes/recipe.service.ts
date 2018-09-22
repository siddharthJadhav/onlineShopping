import { Recipe } from './recipe-list/recipe.model';
import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {

    private racipeList: Recipe[] = [
        // tslint:disable-next-line:max-line-length
        new Recipe('Burgur',
        'Its an testy burgur', 'https://www.pakistantribe.com/wp-content/uploads/2014/09/burgur.jpg',
        [new Ingredient('Buns', 2),
        new Ingredient('Chezz', 1),
        new Ingredient('Chiken', 1)
        ]),
        // tslint:disable-next-line:max-line-length
        new Recipe(
            'Pizza ',
            // tslint:disable-next-line:max-line-length
            'Its an testy chiceken cheez pizza', 'https://www.elementstark.com/woocommerce-extension-demos/wp-content/uploads/sites/2/2016/12/pizza.jpg',
            [new Ingredient('Pizza base', 1),
            new Ingredient('Chezz', 5),
            new Ingredient('Chiken', 1)
            ])
    ];

    recipeSelected = new EventEmitter<Recipe>();

    constructor() {}

    getRecipeList() {
        return this.racipeList.slice();
    }

}
