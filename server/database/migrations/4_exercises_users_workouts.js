
exports.up = function (knex) {
    return knex.schema.createTable("exercises_users_workouts", table => {
        table.increments();
        table.integer("exercise_duration");
        table.integer("calories_burned");
        //foreign keys
        table.integer("user_id").references("id").inTable("users")
        table.integer("workout_id").references("id").inTable("workouts");
        table.integer("exercise_id").references("id").inTable("exercises");
        table.timestamps(true, true);
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable("exercises_users_workouts");
};
