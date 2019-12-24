exports.up = function (knex) {
  return knex.schema.createTable("fat_secret_token", table => {
      table.increments();
      table.string("Oauth2Token", 1000).notNullable();
      table.integer("expires_in").notNullable();
      table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("fat_secret_token");
};