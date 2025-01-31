import { Component } from '@angular/core';
import {Recipe} from './recipe.model';

@Component({
  selector: 'app-recepies',
  standalone: false,

  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.css'
})
export class RecipesComponent {

  selectedRecipe!: Recipe

}
