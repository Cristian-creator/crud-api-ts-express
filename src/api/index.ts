import express from 'express';

import MessageResponse from '../interfaces/MessageResponse';
import todos from './todos/todo.routes';

const router = express.Router();

router.use('/todos', todos);

export default router;
