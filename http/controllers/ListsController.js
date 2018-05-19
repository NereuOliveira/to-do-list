import List from '../models/List'

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
     * 
     * @param req
     * @param res
     */
    index(req, res) {
        List.fetchAll().then((data) => {
            res.json(data);
        })
    }

    /**
     * 
     * @param req 
     * @param res 
     */
    details(req, res) {
        const id = req.params.id;
        res.json({ message: `Details Id: ${id}` })
    }

    /**
     * 
     * @param req 
     * @param res 
     */
    store(req, res) {
        res.json({ message: `Store` })
    }

    /**
     * 
     * @param req 
     * @param res 
     */
    update(req, res) {
        const id = req.params.id;
        res.json({ message: `Update Id: ${id}` })
    }

    /**
     * 
     * @param req 
     * @param res 
     */
    destroy(req, res) {
        const id = req.params.id;
        res.json({ message: `Destroy Id: ${id}` })
    }
}

export default new ListsController
