import Item, { getTaxByCategory } from "./Item";

export default class Order {
  private items: Item[];

  constructor() {
    this.items = [];
  }

  public addItem(item: Item) {
    this.items.push(item);
  }

  public getTotal() {
    return this.items
      .map((item) => item.price)
      .reduce((price, sum) => price + sum, 0);
  }

  public getTaxes() {
    return this.items
      .map((item) => getTaxByCategory(item.category) * item.price)
      .reduce((tax, sum) => tax + sum, 0);
  }
}
