import {EventEmitter, Injectable} from '@angular/core';
import {Recipe} from './recipe.model';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>()

  private recipes: Recipe[] = [
    new Recipe("Delicious",
      "blah blah blah",
      "https://www.spendwithpennies.com/wp-content/uploads/2022/12/1200-The-Best-Meatloaf-Recipe-SpendWithPennies.jpg",
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20)
      ])
    ,
    new Recipe("Delicious 2",
      "blah blah blah 2",
      "https://www.spendwithpennies.com/wp-content/uploads/2022/12/1200-The-Best-Meatloaf-Recipe-SpendWithPennies.jpg",
      [
        new Ingredient('Buns', 2),
        new Ingredient('Meat', 1)
      ])
  ]

  constructor(private readonly shoppingListService: ShoppingListService) {
  }

  public getRecipes() {
    return this.recipes.slice()
  }

  public addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients)
  }
}
