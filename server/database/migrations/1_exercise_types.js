
exports.up = function (knex) {
    return knex.schema.createTable("exercise_types", table => {
        table.increments();
        table.string("exercise_type");
        table.timestamps(true, true);
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable("exercise_types");
};
