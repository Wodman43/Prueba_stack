const express = require('express');
const morgan = require('morgan');
const path = require('path');
const { mongoose }= require('./database');

const app = express();

// settings 
app.set('port',process.env.PORT || 4000)

// midddlewares 
app.use(morgan('dev'));
app.use(express.json());
// routes
app.use('/api/tasks',require('./routes/task.routes'))

// static files 
// console.log();
app.use(express.static(path.join(__dirname, 'public')));

// empezando servidor
app.listen(app.get('port') ,()=>{
    console.log(`server on port ${app.get('port')}`);
});