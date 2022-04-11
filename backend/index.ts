import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';

import startMongo from './src/helpers/dbConnection';
import Projects from './src/controllers/projectsController';
import Auth from './src/controllers/authController';
import { authMiddleware } from './src/helpers/auth';


require('dotenv').config();

const app = express();
app.use(bodyParser.json());
app.use(cors());

startMongo();

app.use('/auth', Auth);
app.use(authMiddleware);
app.use('/projects', Projects);

app.listen(process.env.PORT, () => { console.log('were live!')});
