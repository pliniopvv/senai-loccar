import { Veiculo } from './../model/veiculo';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoritosService {

  persistKey = 'veiculos';

  constructor() {
    const list = localStorage.getItem(this.persistKey);
    if (list != null)
      this._list = JSON.parse(list);
    else
      this._list = [];
  }

  _list: Veiculo[] = [];

  list() {
    return [...this._list];
  }

  add(model: Veiculo) {
    this._list.push(model);
    this.persist();
  }

  remove(model: Veiculo) {
    this._list.splice(
      this._list.indexOf(model),
      1
    );
    this.persist();
  }

  persist() {
    localStorage.setItem(this.persistKey, JSON.stringify(this._list));
  }

  has(id: number) {
    const entity = this._list.find(x => x.id == id);
    if (entity) return true;
    else return false;
  }

}
