
exports.up = function (knex) {
    return knex.schema.createTable("exercise_equipment", table => {
        table.increments();
        table.string("exercise_equipment");
        table.timestamps(true, true);
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable("exercise_equipment");
};
