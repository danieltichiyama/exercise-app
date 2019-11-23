exports.up = function(knex) {
  return knex.schema.createTable("food_images", table => {
    table.increments();
    table.string("url");
    table
      .integer("foods_meals_users_id")
      .references("id")
      .inTable("foods_meals_users");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("food_images");
};
