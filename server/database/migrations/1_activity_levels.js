
exports.up = function (knex) {
    return knex.schema.createTable("activity_levels", table => {
        table.increments();
        table.string("activity_level");
        table.integer("multiplier");
        table.timestamps(true, true);
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable("activity_levels");
};
