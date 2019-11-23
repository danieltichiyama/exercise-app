
exports.up = function (knex) {
    return knex.schema.createTable("user_videos", table => {
        table.increments();
        table.string('url');
        table.text("description");
        //foreign keys
        table.integer("user_id").references("id").inTable("users").notNullable();
        table.integer("exercise_id").references("id").inTable("exercises");
        table.timestamps(true, true);
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable("user_videos");
};
