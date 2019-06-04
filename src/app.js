import 'dotenv/config';
import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import logger from './config/winston';
import routes from './routes/index';
import constants from './utils/constants';

// Define our app port.
const port = process.env.PORT || 3500;

// Instantiate the app
const app = express();

// using our middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('combined'));

// Making the apiURL available across all modules
const apiURL = '/api/v1';
global.apiURL = apiURL;

// Use our routes
app.use('/', (req, res, next) => {
  if (req.originalUrl !== '/') {
    next();
    return;
  }
  res.status(constants.STATUS_OK).json({
    status: constants.STATUS_OK,
    message: 'Welcome to AutoMart',
  });
});

Object.keys(routes).forEach((key) => {
  const value = routes[key];
  app.use(`${apiURL}/`, value);
});

app.use((req, res) => {
  res.status(constants.STATUS_NOT_FOUND).json({
    status: constants.STATUS_NOT_FOUND,
    error: constants.MESSAGE_NOT_FOUND,
  });
});

// Set up listening.
app.listen(port, () => {
  logger.debug(`Server is listening on port ${port}`);
});

export default app;
