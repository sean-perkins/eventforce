import {Request, Response} from 'express';

/**
 * GET /
 * The entry point to the Angular app
 */
export let index = (req: Request, res: Response) => {
  res.render('index');
};

