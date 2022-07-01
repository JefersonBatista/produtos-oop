export function getTaxByCategory(category: string) {
  switch (category) {
    case "Beer":
      return 0.2;
    case "Cigar":
      return 0.25;
    case "Eletronics":
      return 0.3;
    default:
      return 0.0;
  }
}

export default class Item {
  public category: string;
  public description: string;
  public price: number;

  constructor(category: string, description: string, price: number) {
    this.category = category;
    this.description = description;
    this.price = price;
  }
}
