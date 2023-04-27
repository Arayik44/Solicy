import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CardDataModel} from '../shared/model/card-data.model';

@Component({
  selector: 'solicy-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  @Input() public cards: CardDataModel[] = [];
  @Output() public deleteByUniqueValue = new EventEmitter<number>();

  public onDelete(value: number) {
    this.deleteByUniqueValue.emit(value);
  }

  public trackBy(index: number, item: CardDataModel): number {
    return item.value;
  }


}
