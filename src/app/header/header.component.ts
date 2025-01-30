import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: false,

  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  @Output() featureSelected = new EventEmitter<string>()

  onLinkClicked(feature: string) {
    this.featureSelected.emit(feature)
  }
}
