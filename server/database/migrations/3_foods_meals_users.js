exports.up = function(knex) {
  return knex.schema.createTable("foods_meals_users", table => {
    table.increments();
    table.date("date");
    //foreign keys
    table.integer("api_id").notNullable();
    table
      .integer("meal_type_id")
      .references("id")
      .inTable("meal_types")
      .notNullable();
    table
      .integer("user_id")
      .references("id")
      .inTable("users")
      .notNullable();
    table.integer("calories").notNullable();
    table.string("serving_size").notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("foods_meals_users");
};
