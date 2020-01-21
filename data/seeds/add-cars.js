
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {vin: "F328E8DH8JQ901JD0", make: 'Kia', model: "Rio", mileage: 120000},
        {vin: "RW8HFU8UF8VWD8U8N", make: 'Toyota', model: "Camry", mileage: 90000},
        {vin: "239ODDJKCMNBCWU89", make: 'Mercedes', model: "M250", mileage: 210000},
        {vin: "2SM994671DFEOCK90", make: 'Tesla', model: "Roadstar", mileage: 54200},
        {vin: "5RFDCJNR89890IFKO", make: 'Honda', model: "Accord", mileage: 73320}
      ]);
    });
};
