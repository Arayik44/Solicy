import {Injectable} from '@angular/core';
import {LocalStorageService} from 'ngx-webstorage';

@Injectable()
export class MyLocalStorageService {

  constructor(private storage: LocalStorageService) {
  }

  public set<T>(key: string, value: T): void {
    if (value !== null && value !== undefined) {
      this.storage.store(key, JSON.stringify(value));
    }
  }

  public get<T>(key: string): T {
    const value = this.storage.retrieve(key);
    return value ? JSON.parse(value) : null;
  }

  public remove(key: string): void {
    this.storage.clear(key);
  }
}
