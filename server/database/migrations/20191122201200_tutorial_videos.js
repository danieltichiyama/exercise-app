
exports.up = function (knex) {
    return knex.schema.createTable("tutorial_videos", table => {
        table.increments();
        table.string("url").notNullable();
        //foreign keys
        table.integer("exercise_id").references("id").inTable("exercises");
        table.timestamps(true, true);
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable("tutorial_videos");
};
