import express from 'express';

import cors from 'cors';
import bodyParser from 'body-parser';
import Connection from './database/db.js';
import Route from './routes/route.js'
const app = express();
const PORT = 8000;
  
app.use(cors());
app.use(bodyParser.json({extended:true}));
app.use('/',Route);
app.use(bodyParser.urlencoded({extended:true}))

Connection();
app.listen(PORT, () => console.log(`Server is running successfully on PORT ${PORT}`));

