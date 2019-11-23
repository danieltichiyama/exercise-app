
exports.up = function (knex) {
    return knex.schema.createTable("exercises", table => {
        table.increments();
        table.string("name").notNullable().unique();
        table.text("description").notNullable();
        //foreign keys
        table.integer("primary_bodypart_id").references("id").inTable("bodyparts");
        table.integer("exercise_type_id").references("id").inTable("exercise_types");
        table.integer("exercise_difficulty_id").references("id").inTable("exercise_difficulties");
        table.integer("exercise_equipment_id").references("id").inTable("exercise_equipment");
        table.timestamps(true, true);
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable("exercises");
};
