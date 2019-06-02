import 'dotenv/config';
import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import logger from './config/winston';


// Define our app port.
const port = process.env.PORT || 3500;

// Instantiate the app
const app = express();

app.get('/', (req, res) => {
  res.send('Welcom to AutoMart');
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('combined'));

// Set up listening.
app.listen(port, () => {
  logger.debug(`Server is listening on port ${port}`);
});
