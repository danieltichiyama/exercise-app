exports.up = function (knex) {
  return knex.schema.createTable("user_pictures", table => {
      table.increments();
      table.string("url", 1000).notNullable();
      table
        .integer("expires_in")
        .references("id")
        .inTable("users")
        .notNullable();
      table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("user_pictures");
};