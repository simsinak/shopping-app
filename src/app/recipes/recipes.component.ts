import {Component, OnInit} from '@angular/core';
import {Recipe} from './recipe.model';
import {RecipeService} from './recipe-service.service';

@Component({
  selector: 'app-recepies',
  standalone: false,

  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.css',
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit{

  selectedRecipe!: Recipe

  constructor(private readonly recipeService: RecipeService) {
  }

  ngOnInit(){
    this.recipeService.recipeSelected.subscribe(
      (recipe: Recipe) => {
        this.selectedRecipe = recipe
      }
    )
  }

}
