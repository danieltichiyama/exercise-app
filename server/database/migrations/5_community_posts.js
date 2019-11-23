exports.up = function (knex) {
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
    table
      .integer("user_video_id")
      .references("id")
      .inTable("user_videos");
    table
      .integer("food_images_id")
      .references("id")
      .inTable("food_images");
    table
      .integer("exercise_id")
      .references("id")
      .inTable("exercises");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("community_posts");
};
