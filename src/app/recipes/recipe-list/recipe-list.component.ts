import {Component, OnInit} from '@angular/core';
import {Recipe} from '../recipe.model';
import {RecipeService} from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  standalone: false,
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent implements OnInit{
   recipes!: Recipe[]

    constructor(private readonly recipeService: RecipeService) {
    }

    ngOnInit() {
      this.recipes = this.recipeService.getRecipes()
    }
}
