import { Router } from 'express';
import ListsController from '../../http/controllers/ListsController';

/**
 * Here is where we are going to define our list
 * functionalities routes
 */
const listRoutes = Router();

/**
 * Routes to:
 *  - Index
 *  - Store
 */
listRoutes.route('/').get(ListsController.index).post(ListsController.store);

/**
 * Routes to:
 *  - Details
 *  - Update
 *  - Destroy
 */
listRoutes
    .route('/:guid')
    .get(ListsController.details)
    .put(ListsController.update)
    .patch(ListsController.update)
    .delete(ListsController.destroy);

export default listRoutes;
