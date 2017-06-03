'use strict';

import * as async from 'async';
import * as request from 'request';
import * as jsforce from 'jsforce';
import { Response, Request, NextFunction } from 'express';
import { SalesForceUser, SalesForceAuthResponse } from './../models/index';

const connection: any = new jsforce.Connection({
    instanceUrl: SalesForceUser.InstanceUrl
});

/**
 * POST /api/salesforce/login
 * Authenticates the user with Salesforce
 */
export let loginSalesforce = (req: Request, res: Response, next: NextFunction) => {
    connection.login(SalesForceUser.Username, SalesForceUser.Password, (err: any, authRes: any) => {
        if (err) {
            return console.error(err);
        }
        res.json(new SalesForceAuthResponse((<any>Object).assign(authRes, connection)));
    });
};
