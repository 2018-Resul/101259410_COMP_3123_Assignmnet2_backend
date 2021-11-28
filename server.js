const express = require('express');
const mongoose = require('mongoose');
const employeeRouter = require('./routes/EmployeeRoutes.js');
var cors = require('cors')

const app = express();
app.use(cors())
app.use(express.json());



mongoose.connect('mongodb+srv://resul:resulpassword@comp3123resul.xubgo.mongodb.net/101259410_assignment2',
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false });

app.use(employeeRouter);

app.listen(9090, () => { console.log('Server is running http://localhost:9090/') })