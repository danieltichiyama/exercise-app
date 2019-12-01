exports.up = function(knex) {
  return knex.schema.createTable("goals", table => {
    table.increments();
    table.string("goal");
    table.integer("caloric_deficit");
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("goals");
};
