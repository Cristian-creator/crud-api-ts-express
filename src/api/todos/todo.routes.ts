import { Router } from 'express';
import { ParamsWithId } from '../../interfaces/ParamsWithId';
import { validateRequest } from '../../middlewares';
import { Todo } from './todo.model';

import * as TodoHandler from './todos.handlers';

const router = Router();

router.get('/', TodoHandler.findAll);
router.get(
    '/:id',
    validateRequest({
        params: ParamsWithId,
    }), 
    TodoHandler.findOne
);
router.post(
    '/',
    validateRequest({
        body: Todo,
    }),
    TodoHandler.createOne
);
router.put(
    '/:id',
    validateRequest({
        params: ParamsWithId,
        body: Todo,
    }),
    TodoHandler.updateOne
);
router.delete(
    '/:id',
    validateRequest({
        params: ParamsWithId,
    }),
    TodoHandler.deleteOne
);

export default router;