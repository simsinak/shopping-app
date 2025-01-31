import { Component } from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  standalone: false,

  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css'
})
export class ShoppingListComponent {
    ingredients: Ingredient[] = [
      new Ingredient('Apple', 5),
      new Ingredient('Banana', 20)
    ]

  addIngredientToList(ingredient: Ingredient) {
    this.ingredients.push(ingredient)
  }
}
