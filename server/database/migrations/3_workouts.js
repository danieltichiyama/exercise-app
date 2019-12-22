
exports.up = function (knex) {
    return knex.schema.createTable("workouts", table => {
        table.increments();
        table.string("workout");
        table.timestamps(true, true);
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable("workouts");
};
