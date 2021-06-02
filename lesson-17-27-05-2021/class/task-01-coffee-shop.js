class CoffeeShop {
  #name;

  constructor(name) {
    this.#name = name;

    this._menu = [
      {
        name: "Cappuccino",
        type: "drink",
        price: 100,
      },
      {
        name: "Americano",
        type: "drink",
        price: 200,
      },
      {
        name: "Latte",
        type: "drink",
        price: 300,
      },
      {
        name: "Chocolate cupcake",
        type: "food",
        price: 150,
      },
      {
        name: "Vanilla cupcake",
        type: "food",
        price: 120,
      },
      {
        name: "Berries cupcake",
        type: "food",
        price: 180,
      },
      {
        name: "Cupcace",
        type: "food",
        price: 100,
      },
    ];

    this._orders = [];
  }

  get name() {
    return this.#name;
  }

  get menu() {
    return this._menu;
  }

  addOrder(itemName) {
    let message = "This item is currently unavailable!";
    let exist = false;

    for (let item of this.menu) {
      if (item.name === itemName) {
        exist = true;
        this._orders.push(item);
      }
    }

    if (!exist) {
      console.log(message);
    }
  }

  listOrders() {
    let orders = [];
    for (let item of this._orders) {
      orders.push(item.name);
    }
    console.log(orders.join(", "));
  }

  fulfillOrder() {
    if (this._orders.length === 0) {
      console.log("All orders have been fulfilled!");
    } else {
      console.log(`The ${this._orders[0].name} is ready!`);
      this._orders.shift();
    }
  }

  dueAmount() {
    let amount = this._orders.reduce(
      (acc, current) => (acc += current.price),
      0
    );
    console.log(amount);
  }

  cheapestItems() {
    let cheapest = this._menu.reduce(
      (acc, current) => {
        if (current.price <= acc.price) {
          acc.price = current.price;
          acc.items.push(current.name);
        }
        return acc;
      },
      { price: Infinity, items: [] }
    );

    console.log(cheapest.items.join(", "));
  }

  drinksOnly() {
    let drinks = [];
    for (let item of this._menu) {
      if (item.type === "drink") {
        drinks.push(item.name);
      }
    }
    console.log(drinks.join(", "));
  }

  foodOnly() {
    let food = [];
    for (let item of this._menu) {
      if (item.type === "food") {
        food.push(item.name);
      }
    }
    console.log(food.join(", "));
  }
}

let shop = new CoffeeShop("Best Coffee");

shop.addOrder("Latte");
shop.addOrder("Vanilla cupcake");
shop.addOrder("Berries cupcake");
shop.addOrder("Pizza"); // This item is currently unavailable!

shop.listOrders(); // Latte, Vanilla cupcake, Berries cupcake

shop.dueAmount(); // 600

shop.fulfillOrder(); // The Latte is ready!
shop.fulfillOrder(); // The Vanilla cupcake is ready!
shop.fulfillOrder(); // The Berries cupcake is ready!
shop.fulfillOrder(); // All orders have been fulfilled!

shop.cheapestItems(); // Cappuccino, Cupcace

shop.drinksOnly(); // Cappuccino, Americano, Latte
shop.foodOnly(); // Chocolate cupcake, Vanilla cupcake, Berries cupcake, Cupcace
