import Item from "./Item";

export default class TaxItem extends Item {
  constructor(category: string, description: string, price: number) {
    super(category, description, price);
  }

  public calculateTax(taxRate: number) {
    return taxRate * this.price;
  }
}
