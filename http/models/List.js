import db from '../../config/db'
import ListItem from './ListItem'

const List = db.Model.extend({
    tableName: 'lists',
    items: function() {
        return this.hasMany(ListItem);
    }
})

export default List
