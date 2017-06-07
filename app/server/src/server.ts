/**
 * Module dependencies.
 */
import * as express from 'express';
import * as compression from 'compression';  // compresses requests
import * as session from 'express-session';
import * as bodyParser from 'body-parser';
import * as logger from 'morgan';
import * as errorHandler from 'errorhandler';
import * as lusca from 'lusca';
import * as dotenv from 'dotenv';
import * as flash from 'express-flash';
import * as path from 'path';
import expressValidator = require('express-validator');

/**
 * Load environment variables from .env file, where API keys and passwords are configured.
 */
dotenv.config({ path: '.env' });

/**
 * Controllers (route handlers).
 */
import * as homeController from './controllers/home';
import * as eventController from './controllers/event';
import * as salesforceController from './controllers/salesforce';

/**
 * Create Express server.
 */
const app = express();

/**
 * Express configuration.
 */
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);
app.use(compression());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressValidator());
app.use(session({
    resave: true,
    saveUninitialized: true,
    secret: process.env.SESSION_SECRET,
}));
app.use(flash());
app.use(lusca.xframe('SAMEORIGIN'));
app.use(lusca.xssProtection(true));
app.use(express.static(path.join(__dirname, '../views'), { maxAge: 31557600000 }));

/**
 * Primary app routes.
 */
app.get('/', homeController.index);
/**
 * API Event routes
 */
app.get('/api/v1/events', eventController.getEvents);
app.get('/api/v1/event/:id', eventController.getEvent);
app.get('/api/v1/event/:id/sessions', eventController.getEventSessions);
app.post('/api/v1/event/:id/register', eventController.postEventRegistration);

/**
 * Salesforce API
 */
app.post('/api/v1/salesforce/login', salesforceController.loginSalesforce);

/**
 * Error Handler. Provides full stack - remove for production
 */
app.use(errorHandler());

/**
 * Start Express server.
 */
app.listen(app.get('port'), () => {
    console.log(('  App is running at http://localhost:%d in %s mode'), app.get('port'), app.get('env'));
    console.log('  Press CTRL-C to stop\n');
});

module.exports = app;
