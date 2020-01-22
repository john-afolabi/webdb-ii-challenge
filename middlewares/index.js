const { getCarbyId } = require("../cars/cars-model");

async function validateCarId(req, res, next) {
  const car = await getCarbyId(req.params.id);
  if (car) {
    req.car = car;
    next();
  } else {
    res
      .status(404)
      .json({ message: `There is no Car with ID of ${req.params.id}` });
  }
}

function validatePostData(req, res, next) {
  if (req.body.vin && req.body.make && req.body.model && req.body.mileage) {
    next();
  } else {
    res.status(400).json({
      message: `Please supply vin, make, model and mileage of the car`
    });
  }
}


module.exports = {
    validateCarId,
    validatePostData
}
