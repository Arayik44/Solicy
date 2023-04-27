import {Component, OnInit} from '@angular/core';
import {CardDataModel} from './components/shared/model/card-data.model';
import {MyLocalStorageService} from './services/my-local-storage.service';
import {CARDS} from './components/shared/constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public cards!: CardDataModel[];

  constructor(
    private localStorage: MyLocalStorageService,
  ) {
  }

  public ngOnInit(): void {
    this.cards = this.localStorage.get(CARDS) || [];
  }

  public onAdd(): void {
    const newCard = this.generateNewCard();
    this.cards.push(newCard);
    this.updateCardsInStorage();
  }

  public generateNewCard(): CardDataModel {
    let newNumber: number;
    do {
      newNumber = this.generateRandomNumber();
    }
    while (this.cards.some(card => card.value === newNumber));

    return {
      value: newNumber,
    };
  }

  public generateRandomNumber(min = 100, max = 999): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  public onSort(): void {
    this.cards.sort((card1, card2) => card1.value - card2.value);
    this.updateCardsInStorage();
  }

  public onDelete(value: number) {
    this.cards.splice(this.cards.findIndex(i => i.value === value), 1);
    this.updateCardsInStorage();
  }

  public updateCardsInStorage() {
    this.localStorage.set(CARDS, this.cards);
  }

}
