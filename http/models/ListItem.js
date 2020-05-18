import db from '../../config/db';

const ListItem = db.Model.extend({
    tableName: 'list_items',
});

export default ListItem;
