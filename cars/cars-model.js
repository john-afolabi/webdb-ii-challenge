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

function updateCar(id, changes) {
  return db("cars")
    .where({ id })
    .update(changes)
    .then(count => (count > 0 ? getCarbyId(id) : null));
}

function removeCar(id) {
  return db("cars")
    .where({ id })
    .del();
}


module.exports = {
  get,
  getCarbyId,
  addCar,
  updateCar,
  removeCar
};
