
exports.up = function (knex) {
    return knex.schema.createTable("exercises_bodyparts", table => {
        table.increments();
        //foreign keys
        table.integer("exercise_id").references("id").inTable("exercises").notNullable();
        table.integer("bodypart_id").references("id").inTable("bodyparts").notNullable();
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable("exercises_bodyparts");
};
