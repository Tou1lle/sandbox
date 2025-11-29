class Product {
  constructor(id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
  }

  calculatePriceByAmount(amount) {
    return this.price * amount;
  }
}

class PersonalCareProduct {
  
}