import Item from "./Item";

export default class TaxItem extends Item {
  constructor(description: string, price: number) {
    super(description, price);
  }

  public getTax() {
    return 0.0;
  }

  public calculateTax() {
    return this.getTax() * this.price;
  }
}
