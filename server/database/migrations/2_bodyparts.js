
exports.up = function (knex) {
    return knex.schema.createTable("bodyparts", table => {
        table.increments();
        table.string("bodypart");
        table.integer("muscle_group_id").references("id").inTable("muscle_groups").notNullable();
        table.timestamps(true, true);
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable("bodyparts");
};
