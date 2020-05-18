import ListsRepository from '../repository/ListsRepository';

/**
 * Lists Controller
 */
class ListsController {
    constructor() {
        this.index = this.index.bind(this);
        this.details = this.details.bind(this);
        this.store = this.store.bind(this);
        this.update = this.update.bind(this);
        this.destroy = this.destroy.bind(this);
    }

    /**
     * Get an array of lists
     *
     * @param req
     * @param res
     */
    index(req, res) {
        res.json(ListsRepository.getAll());
    }

    /**
     * Get one list
     *
     * @param req
     * @param res
     */
    details(req, res) {
        const guid = req.params.guid;
        res.json(ListsRepository.get(guid));
    }

    /**
     * Store a new list
     *
     * @param req
     * @param res
     */
    store(req, res) {
        let { name } = req.body;
        const guid = ListsRepository.create(name);
        res.json({ message: `List Created`, guid, name });
    }

    /**
     * Update a list
     *
     * @param req
     * @param res
     */
    update(req, res) {
        const guid = req.params.guid;
        ListsRepository.update(guid, req.body);
        res.json({ message: `List Updated` });
    }

    /**
     * Destroy a list
     *
     * @param req
     * @param res
     */
    destroy(req, res) {
        const guid = req.params.guid;
        ListsRepository.delete(guid);
        res.json({ message: `List Deleted` });
    }
}

export default new ListsController();
