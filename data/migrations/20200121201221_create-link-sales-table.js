exports.up = function(knex) {
  return knex.schema.createTable("sales", table => {
    table.increments();
    table.integer("car_id");
    table.boolean("is_sold");

    // Add foreign key to car
    table.foreign("car_id").references("cars.id");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("sales");
};
