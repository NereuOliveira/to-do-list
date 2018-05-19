import db from '../../config/db'

const List = db.Model.extend({
    tableName: 'lists'
})

export default List
