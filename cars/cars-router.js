const express = require("express");
const {
  get,
  getCarbyId,
  addCar,
  updateCar,
  removeCar
} = require("./cars-model");
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

router.get("/:id", (req, res) => {
  getCarbyId(req.params.id)
    .then(car => {
      res.status(200).json(car);
    })
    .catch(error => {
      res.status(500).json({
        errorMessage: `Could not retrieve the car with ID:${id} at this moment`
      });
    });
});

router.post("/", (req, res) => {
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

router.put("/:id", (req, res) => {
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

router.delete("/:id", (req, res) => {
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
