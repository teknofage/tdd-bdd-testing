const mocha = require("mocha")
const chai = require("chai")
const utils = require("../utils")
const expect = chai.expect

// ========================================================
// NOTE: https://mochajs.org/#arrow-functions
// Passing arrow functions (“lambdas”) to Mocha is discouraged.
// Lambdas lexically bind this and cannot access the Mocha context.
// ========================================================

it("should say hello", function() {
  const hello = utils.sayHello()
  expect(hello).to.be.a("string")
  expect(hello).to.equal("Hello")
  expect(hello).with.lengthOf(5)
})

// ========================================================
// Level 1 Challenges
// 1. Write the pending tests check that they are pending, like this:
//    it("should do something that you want done")
// 2. Next, write the test and see that it fails.
// 3. Write the code in the utils.js file to make the test pass.
// 4. Finally see if you would like to refactor your code at all.
// This is called "Red-Green-Refactor"
// ========================================================

// it('Should return.the area of a rectangle given width and height');
it("should return the area of a rectangle", function() {
  const rect_area = utils.area(3,5);
  expect(rect_area).to.be.an("Number");
  expect(rect_area).to.be.above(0);
  expect(rect_area).to.equal(15);
});

// it('Should return the perimeter of a rectangle given width and height');
it("Should return the perimeter of a rectangle", function() {
  const rect_peri = utils.perimeter(3,5);
  expect(rect_peri).to.be.an("Number");
  expect(rect_peri).to.be.above(0);
  expect(rect_peri).to.equal(16);
});


// it('Should return the area of a circle with a radius');
it('Should return the area of a circle with a radius', function() {
  const circ_area = utils.circleArea(3);
  expect(circ_area).to.be.an("Number");
  expect(circ_area).to.be.above(0);
  expect(circ_area).to.equal((3*Math.PI)^2);
});

// it('Should return the number of items in the cart')
it('Should return the number of items in the cart', function() {
  const circ_area = utils.circleArea(3);
  expect(circ_area).to.be.an("Number");
  expect(circ_area).to.be.above(0);
  expect(circ_area).to.equal((3*Math.PI)^2);
});

// it('Should return null if any of the measurements are negative')
it('Should return null if any of the measurements are negative', function() {
  const circ_area = utils.circleArea(3);
  expect(circ_area).to.be.an("Number");
  expect(circ_area).to.be.above(0);
  expect(circ_area).to.equal((3*Math.PI)^2);
});




// ========================================================
// Level 2 Challenges
// ========================================================
// NOTE: The following unimplemented test cases are examples
// of "Pending Tests" in Chai. Someone should write these
// tests eventually.
// ========================================================

beforeEach((done) => {
  utils.clearCart()
  done()
})

// it("Should create a new (object) Item with name and price")
it("Should create a new (object) Item with name and price", function() {
  const item = utils.createItem("apple", 0.99);
  expect(item).to.be.a("object");
  expect(item).to.have.property("name", "apple");
  expect(item).to.have.property("price", 0.99);
  expect(item).to.have.property("quantity", 1);
})

it("Should return an array containing all items in cart", function() {
  expect(utils.getNumItemsInCart()).to.equal(0)
  utils.addItemToCart(utils.createItem("Apple", 0.99));
  utils.addItemToCart(utils.createItem("Banana", 1.31));
  utils.addItemToCart(utils.createItem("Jackie Chan", 3));
  expect(utils.getNumItemsInCart()).to.equal(3)
})

it("Should add a new item to the shopping cart", function() {
  utils.addItemToCart(utils.createItem("Apple", 0.99));
  utils.addItemToCart(utils.createItem("Banana", 1.31));
  utils.addItemToCart(utils.createItem("Jackie Chan", 3));
  expect(utils.getNumItemsInCart()).to.equal(3)
})

it("Should return the number of items in the cart", function() {
  expect(utils.getNumItemsInCart()).to.equal(0)
  utils.addItemToCart(utils.createItem("Apple", 0.99));
  utils.addItemToCart(utils.createItem("Banana", 1.31));
  utils.addItemToCart(utils.createItem("Jackie Chan", 3));
  expect(utils.getNumItemsInCart()).to.equal(3)
})

it("Should remove items from cart", function() {
  utils.addItemToCart(utils.createItem("Apple", 0.99));
  utils.addItemToCart(utils.createItem("Banana", 1.31));
  utils.addItemToCart(utils.createItem("Jackie Chan", 3));
  expect(utils.getNumItemsInCart()).to.equal(3);
  utils.removeItemFromCart("Apple");
  expect(utils.getNumItemsInCart()).to.equal(2)
})

// ========================================================
// Stretch Challenges
// ========================================================

it("Should update the count of items in the cart", function() {
  expect(utils.getNumItemsInCart()).to.equal(0);
  utils.addItemToCart(utils.createItem("Apple", 0.99));
  utils.addItemToCart(utils.createItem("Banana", 1.31));
  utils.addItemToCart(utils.createItem("Jackie Chan", 3));
  utils.removeItemFromCart("Apple")
  expect(utils.getNumItemsInCart()).to.equal(2)
})

it("Should validate that an empty cart has 0 items", function() {
  utils.clearCart();
  expect(utils.getNumItemsInCart()).to.equal(0)
})

it("Should return the total cost of all items in the cart", function() {
  utils.addItemToCart(utils.createItem("Apple", 0.99));
  utils.addItemToCart(utils.createItem("Banana", 1.31));
  utils.addItemToCart(utils.createItem("Jackie Chan", 3));
  expect(utils.totalCostItemsInCart()).to.equal(5.30)
})
