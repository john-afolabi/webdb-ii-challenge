const express = require("express");
const {
  get,
  addCar,
  updateCar,
  removeCar
} = require("./cars-model");
const { validateCarId, validatePostData } = require("../middlewares/index");
const router = express.Router();

router.get("/", (req, res) => {
  get()
    .then(cars => {
      res.status(200).json(cars);
    })
    .catch(error => {
      res
        .status(500)
        .json({ errorMessage: `Could not retrieve cars at this moment` });
    });
});

router.get("/:id", validateCarId, (req, res) => {
  res.status(200).json(req.car);
});

router.post("/", validatePostData, (req, res) => {
  addCar(req.body)
    .then(caradded => {
      res.status(201).json(caradded);
    })
    .catch(error => {
      res
        .status(500)
        .json({ errorMessage: `Unable to add a new entry at this moment` });
    });
});

router.put("/:id", validateCarId, validatePostData, (req, res) => {
  updateCar(req.params.id, req.body)
    .then(car => {
      res.status(201).json(car);
    })
    .catch(error => {
      res
        .status(500)
        .json({ errorMessage: `Unable to update car details at this moment` });
    });
});

router.delete("/:id", validateCarId, (req, res) => {
  removeCar(req.params.id)
    .then(numDel => {
      res.status(200).json({ message: `${numDel} car has been deleted` });
    })
    .catch(error => {
      res
        .status(500)
        .json({ errorMessage: `Unable to delete car at this moment` });
    });
});

module.exports = router;
