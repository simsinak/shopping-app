import {Component, ElementRef, ViewChild} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  standalone: false,

  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css'
})
export class ShoppingEditComponent {

  @ViewChild('inputName') inputName!: ElementRef
  @ViewChild('inputAmount') inputAmount!: ElementRef

  constructor(private readonly shoppingListService: ShoppingListService) {
  }

  onAddItem() {
    const name = this.inputName.nativeElement.value
    const amount = this.inputAmount.nativeElement.value
    const ingredient = new Ingredient(name, Number(amount))
    this.shoppingListService.addIngredient(ingredient)
  }
}
