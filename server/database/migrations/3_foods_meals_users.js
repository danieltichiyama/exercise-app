exports.up = function(knex) {
  return knex.schema.createTable("foods_meals_users", table => {
    table.increments();
    table.integer("calories").notNullable();
    table.integer("servings").notNullable();
    table.integer("api_id").notNullable();
    table.string("description");
    table.integer("protein");
    table.integer("carbs");
    table.integer("fat");
    table.string("serving_size");
    //foreign keys
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
