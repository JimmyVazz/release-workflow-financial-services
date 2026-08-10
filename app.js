const users = [
  { id: 1, name: "Jimmy" }
];

function getUsers() {
  return users.filter(user => user.name);
}

const products = [
  { id: 1, name: "Laptop" }
];

const orders = [
  { id: 1, productId: 1, userId: 1 }
];

module.exports = {
  users,
  products,
  orders,
  getUsers
};