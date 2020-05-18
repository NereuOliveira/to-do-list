import Store from 'data-store';
import uuid from 'uuid/v4';

class ListsRepository {
    constructor() {
        this.lists = new Store('lists', { path: 'data/lists.json' });
        this.listItems = new Store('list_items', { path: 'data/list_items.json' });
    }

    getAll() {
        return this.lists.get('data');
    }

    get(guid) {
        let list = this.lists.get(`data.${guid}`);
        let items = this.listItems.get(`data.${guid}`) || [];

        if (typeof list === 'undefined') return null;

        return { ...list, items };
    }

    create(name) {
        const guid = uuid();
        this.lists.set(`data.${guid}`, { name });

        return guid;
    }

    update(guid, form) {
        this.listItems.set(
            `data.${guid}`,
            form.items.filter((item) => item.description.trim() !== '')
        );
    }

    delete(guid) {
        this.lists.del(`data.${guid}`);
        this.listItems.del(`data.${guid}`);
    }
}

export default new ListsRepository();
