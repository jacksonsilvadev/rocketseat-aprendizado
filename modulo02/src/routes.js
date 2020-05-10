import { Router } from 'express';

const routes = new Router();

routes.get('/test', (req, res) => res.json('hello world'));

export default routes;
