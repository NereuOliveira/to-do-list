import knex         from 'knex'
import bookshelf    from 'bookshelf'

const development = {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
        filename: './mydb.sqlite'
    }
}

const db = bookshelf(knex(development))

export default db
