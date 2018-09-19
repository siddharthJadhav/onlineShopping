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

  addIngredient(name: string, amount: number) {
    const ingredient = new Ingredient(name, amount);
    this.ingredients.push(ingredient);
    this.addNewIngredient.emit(this.ingredients);
  }

}
