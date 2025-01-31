import {Component, ElementRef, EventEmitter, Output, ViewChild} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  standalone: false,

  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css'
})
export class ShoppingEditComponent {

  @ViewChild('inputName') inputName!: ElementRef
  @ViewChild('inputAmount') inputAmount!: ElementRef
  @Output() ingredientAdded = new EventEmitter<Ingredient>()

  onAddItem() {
    const name = this.inputName.nativeElement.value
    const amount = this.inputAmount.nativeElement.value
    const ingredient = new Ingredient(name, Number(amount))
    this.ingredientAdded.emit(ingredient)
  }
}
