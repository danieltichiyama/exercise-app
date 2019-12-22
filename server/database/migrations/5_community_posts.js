exports.up = function(knex) {
  return knex.schema.createTable("community_posts", table => {
    table.increments();
    table.string("title");
    table.text("body");
    //foreign keys
    table
      .integer("user_id")
      .references("id")
      .inTable("users")
      .notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("community_posts");
};
