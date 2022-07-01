import { getTaxByCategory } from "./Item";
import TaxItem from "./TaxItem";

export default class Order {
  private items: TaxItem[];

  constructor() {
    this.items = [];
  }

  public addItem(item: TaxItem) {
    this.items.push(item);
  }

  public getTotal() {
    return this.items
      .map((item) => item.price)
      .reduce((price, sum) => price + sum, 0);
  }

  public getTaxes() {
    return this.items
      .map((item) => item.calculateTax(getTaxByCategory(item.category)))
      .reduce((tax, sum) => tax + sum, 0);
  }
}
