import 'dotenv/config';
import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import logger from './config/winston';
import userRoute from './routes/user';

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
app.use(`${apiURL}`, userRoute);

// Set up listening.
app.listen(port, () => {
  logger.debug(`Server is listening on port ${port}`);
});

export default app;
