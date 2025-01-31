import {Component, EventEmitter, Output} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  standalone: false,

  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent {
    @Output() recipeSelected = new EventEmitter<Recipe>()
     recipes: Recipe[] = [
       new Recipe("Delicious",
         "blah blah blah",
         "https://www.spendwithpennies.com/wp-content/uploads/2022/12/1200-The-Best-Meatloaf-Recipe-SpendWithPennies.jpg")
         ,
       new Recipe("Delicious 2",
         "blah blah blah 2",
         "https://www.spendwithpennies.com/wp-content/uploads/2022/12/1200-The-Best-Meatloaf-Recipe-SpendWithPennies.jpg")
     ]

     onRecipeSelected(recipe: Recipe) {
       this.recipeSelected.emit(recipe)
     }

}
