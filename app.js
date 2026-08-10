const users = [
  { id: 1, name: "Jimmy" }
];

function getUsers() {
  return users.filter(user => user.name);
}
//products
const products = [
  { id: 1, name: "Laptop" }
];
//orders
const orders = [
  { id: 1, productId: 1, userId: 1 }
];

module.exports = {
  users,
  products,
  orders,
  getUsers
};