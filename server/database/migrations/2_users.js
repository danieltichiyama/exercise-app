exports.up = function(knex) {
  return knex.schema.createTable("users", table => {
    table.increments();
    table
      .string("email")
      .notNullable()
      .unique();
    table.string("name").notNullable();
    table.string("password").notNullable();
    //optional data
    table.date("birth_date");
    table.decimal("weight");
    table.decimal("height");
    table.integer("points").defaultTo(0);
    table.integer("recommended_calories");
    //foreign keys
    table
      .integer("gender_id")
      .references("id")
      .inTable("genders");
    table
      .integer("activity_level_id")
      .references("id")
      .inTable("activity_levels")
      .notNullable();
    table
      .integer("user_tier_id")
      .references("id")
      .inTable("user_tiers")
      .notNullable()
      .defaultTo(1);
    table
      .integer("goal_id")
      .references("id")
      .inTable("goals")
      .notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("users");
};
