exports.up = function (knex, Promise) {
    return knex.schema.createTable('lists', (table) => {
        table.increments('id').primary();
        table.string('name');
        table.string('guid');
    });
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('lists');
};
