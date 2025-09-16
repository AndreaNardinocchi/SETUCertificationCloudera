// Exercise 1
const sales = [
  { item: "t-shirt", quantity: 10, price: 90 },
  { item: "tie", quantity: 15, price: 50 },
  { item: "belt", quantity: 8, price: 140 },
];

function calculateTotalSales(sales) {
  let total = 0;
  sales.forEach((sale) => {
    total += sale.quantity * sale.price;
  });
  return total;
}
console.log("The total is ", calculateTotalSales(sales));

// Exercise 2 MY VERSION
const orders = [ {item:"t-shirt", quantity:10, price: 90}, {item:"tie", quantity:15, price: 50}, {item:"belt", quantity:8, price: 140}
]

function generateReceipt(orders) {
  let total=0;
  console.log("Item  Quantity  Price  Total");
  orders.forEach((order) => {
  console.log(order.item, order.quantity, "Euro", order.price, "SubTot", order.quantity*order.price)
  total+=order.quantity*order.price;
});

  console.log("------------------------------------------");
return total;

}


console.log("The total is ", generateReceipt(orders));

// Exercise 2
const orders = [
    { item: "Espresso", quantity: 2, price: 3.5 },
    { item: "Latte", quantity: 3, price: 4.0 },
    { item: "Cappuccino", quantity: 1, price: 4.5 }
];

function generateReceipt(orders) {
    let grandTotal = 0;
    console.log("Receipt:");
    console.log("----------------------");
    for (let i = 0; i < orders.length; i++) {
        const itemTotal = orders[i].quantity * orders[i].price;
        grandTotal += itemTotal;
        console.log(`${orders[i].item} - Quantity: ${orders[i].quantity}, Price: $${orders[i].price}, Total: $${itemTotal}`);
    }
    console.log("----------------------");
    console.log(`Grand Total: $${grandTotal}`);
}

generateReceipt(orders);

// Exercise 3 MY SOLUTION
const passwords = [ "hagamos65", "rwet243@", "765565"];

function passwordCheck(passwords) {
  
  passwords.forEach((password) => {
    if (password.length>8 && password.length<20 && /^[a-zA-Z0-9]+$/.test(password)) {
  console.log("Password is valid.");
} else {
  console.log("Password is invalid.");
}
});

// Exercise 3
const passwords = ["Password123", "short", "ValidPass123", "too_long_password_example", "12345"];

function validatePasswords(passwords) {
    const regex = /^[a-zA-Z0-9]{8,20}$/;
    for (let i = 0; i < passwords.length; i++) {
        if (regex.test(passwords[i])) {
            console.log(`${passwords[i]} is valid.`);
        } else {
            console.log(`${passwords[i]} is invalid.`);
        }
    }
}

validatePasswords(passwords);


// Exercise 4 MY VERSION
const products = [
    { name: "Computers", stock: 12},
    { name: "Headsets", stock: 20 },
    { name: "Fridges", stock: 0 }
];

function checkStockLevels(products) {
    
  console.log("Stock check");
  products.forEach((product) => {
  if (product.stock === 0) {
    console.log(product.name, " are out of stock!" )
  } else {
    console.log(product.name, " are in stock!" )
  }
});
}

checkStockLevels(products);


// Exercise 4 
const products = [
    { name: "Computers", stock: 12},
    { name: "Headsets", stock: 20 },
    { name: "Fridges", stock: 0 }
];

function checkStockLevels(products) {
    
  console.log("Stock check");
  products.forEach((product) => {
  if (product.stock === 0) {
    console.log(product.name, " are out of stock!" )
  } else {
    console.log(product.name, " are in stock!" )
  }
});
}

checkStockLevels(products);