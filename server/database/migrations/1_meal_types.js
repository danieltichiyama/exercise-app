exports.up = function (knex) {
  return knex.schema.createTable("meal_types", table => {
    table.increments();
    table.string("meal_type");
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("meal_types");
};
