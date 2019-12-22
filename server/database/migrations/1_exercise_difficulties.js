
exports.up = function (knex) {
    return knex.schema.createTable("exercise_difficulties", table => {
        table.increments();
        table.string("exercise_difficulty");
        table.decimal("exercise_multiplier")
        table.timestamps(true, true);
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable("exercise_difficulties");
};
