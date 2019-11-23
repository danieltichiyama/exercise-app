exports.up = function (knex) {
  return knex.schema.createTable("community_comments", table => {
    table.increments();
    table.text("comment_body");
    //foreign keys
    table
      .integer("user_id")
      .references("id")
      .inTable("users")
      .notNullable();
    table
      .integer("community_post_id")
      .references("id")
      .inTable("community_posts")
      .notNullable();

    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.createTable("community_comments");
};
