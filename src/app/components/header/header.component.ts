import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'solicy-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Output() public onAddClick = new EventEmitter<void>()
  @Output() public onSortClick = new EventEmitter<void>()

  public onAdd() {
    this.onAddClick.emit();
  }

  public onSort() {
    this.onSortClick.emit();
  }
}
