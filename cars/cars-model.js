const db = require("../data/db-config");

function get() {
  return db("cars");
}

function getCarbyId(id) {
  return db("cars")
    .where({ id })
    .first();
}

function addCar(car) {
  return db("cars")
    .insert(car)
    .then(([id]) => getCarbyId(id));
}

module.exports = {
  get,
  getCarbyId,
  addCar
};
