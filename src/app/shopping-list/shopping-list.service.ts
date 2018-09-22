import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
export class ShoppingListService {

  private ingredients: Ingredient[] = [
    new Ingredient('Apple', 5),
    new Ingredient('Tomato', 6)
  ];

  addNewIngredient = new EventEmitter<Ingredient[]>();

  getIngredientsList() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.addNewIngredient.emit(this.ingredients.slice());
  }

  /**
   *Add ingredients list to ingriendent array
   *
   * @param {Ingredient[]} ingredients ingrendent list array
   * @memberof ShoppingListService
   */
  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.addNewIngredient.emit(this.ingredients.slice());
  }

}
