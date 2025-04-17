import {Component, OnInit} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  standalone: false,

  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css'
})
export class ShoppingListComponent implements OnInit {

  ingredients!: Ingredient[]

  constructor(private readonly shoppingListService: ShoppingListService) {
  }

  ngOnInit() {
        this.ingredients = this.shoppingListService.getIngredients()
        this.shoppingListService.ingredientsChanged.subscribe(
          (ingredients: Ingredient[]) => {
            this.ingredients = ingredients
          }
        )
    }
}
