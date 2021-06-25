import { makeAutoObservable } from 'mobx';
import { imagesData } from './images';
 
class Store {
  items = [];
  category = 'dashboard';
  filter = 'favorite';

  constructor(items:any) {
    makeAutoObservable(this);
    this.items = items;
  }

  changeCategory(category:string) {
    this.category = category;
  }

  changeFilter(filter:string) {
    this.filter = filter;
  }
}

export const store = new Store(imagesData);