const express = require('express');
const cors = require('cors');
const createRouter = require('./Routes/createRoute')

const app = express();

app.use(express.json());
app.use(cors())

app.use('/api',createRouter);

app.listen(4000,()=>{`server is running on port ${4000}`})