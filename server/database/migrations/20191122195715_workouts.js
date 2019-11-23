
exports.up = function (knex) {
    return knex.schema.createTable("workouts", table => {
        table.increments();
        table.string("workout");
        //foreign keys
        table.integer("user_id").references("id").inTable("users");
        table.timestamps(true, true);
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable("workouts");
};
