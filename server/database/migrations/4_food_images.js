exports.up = function (knex) {
  return knex.schema.createTable("food_images", table => {
    table.increments();
    table.string("url");
    table
      .integer("users_id")
      .references("id")
      .inTable("users");
    table
      .integer("meal_type_id")
      .references("id")
      .inTable("meal_types");
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("food_images");
};
