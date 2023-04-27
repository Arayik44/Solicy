import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'solicy-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() public cardNumber!: number;
  @Output() public onDelete = new EventEmitter<void>();

  public remove() {
    this.onDelete.emit();
  }
}
