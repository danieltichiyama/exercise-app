exports.up = function(knex) {
  return knex.schema.createTable("meal_types", table => {
    table.increments();
    table.string("meal_type");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("meal_types");
};
