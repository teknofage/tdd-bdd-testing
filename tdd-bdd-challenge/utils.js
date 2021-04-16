// ========================================================
// Level 1 Challenges
// ========================================================

const sayHello = () => {
  return "Hello"
}

const area = (w, h) => {
  // should return the area
  rect_area = w * h
  return rect_area
}

const perimeter = (w, h) => {
  // should return the perimeter
  rect_peri = (2*w) + (2*h)
  return rect_peri
}

const circleArea = r => {
  // should return the area of the circle
  pi = Math.PI
  circ_area = (pi * r)^2
  return circ_area
}

// ========================================================
// Level 2 Challenges
// ========================================================
// NOTE: You will need to implement methods below (not yet
// defined) in order to make the tests pass.
// ========================================================

const shoppingCart = []

const clearCart = () => {
  shoppingCart.length = 0
  return shoppingCart
}

const createItem = (name, price) => {
  return { name, price, quantity: 1 }
}

const getShoppingCart = () => {
  // should return the current state of shopping cart
  console.log(shoppingCart)
  return shoppingCart
}

const addItemToCart = (item) => {
  // should add item to shopping cart
  shoppingCart.push(item)
  return shoppingCart
}

const getNumItemsInCart = () => {
  // should return the total quantity of items in cart
  return shoppingCart.length
}

const totalCostItemsInCart = (getShoppingCart) => {
  // should return the total cost of items in the cart
  let total_cost_cart = 0;
  items.forEach(function(value, index, array) {
    total_cost_cart += value.price;
  })
  return total_cost_cart
}

const removeItemFromCart = (item) => {
  // should remove item from shopping cart
  ind = shoppingCart.indexOf(item)
  shoppingCart.splice(ind)
  return shoppingCart
}

module.exports = {
  sayHello, area, perimeter, circleArea,
  clearCart, createItem, getShoppingCart, addItemToCart,
  getNumItemsInCart, removeItemFromCart
}
