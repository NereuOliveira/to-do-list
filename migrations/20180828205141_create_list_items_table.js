exports.up = function (knex, Promise) {
    return knex.schema.createTable('list_items', (table) => {
        table.increments('id').primary();
        table.boolean('is_checked').defaultTo(false);
        table.string('description');
        table.integer('list_id').unsigned().references('lists.id');
    });
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('list_items');
};
