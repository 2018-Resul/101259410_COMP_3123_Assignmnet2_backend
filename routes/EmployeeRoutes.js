const express = require('express');
const employeeModel = require('../models/Employee');
const app = express();

//Read ALL
app.get('/api/v1/employees', async (req, res) => {
  const employees = await employeeModel.find({});


  try {
    res.send(employees);
  } catch (err) {
    res.status(500).send(err);
  }
});


app.post('/api/v1/employees', async (req, res) => {
  const employee = new employeeModel(req.body);

  try {
    await employee.save();
    res.send(employee);
  } catch (err) {
    res.status(500).send(err);
  }
});



app.get('/api/v1/employees/:id', async (req, res) => {
  const idfind = req.params.id
  console.log(idfind)

  const employees = await employeeModel.findById(idfind);

  try {
    res.send(employees);
  } catch (err) {
    res.status(500).send(err);
  }
});



app.put('/api/v1/employees/:id', async (req, res) => {
  try {
    await employeeModel.findByIdAndUpdate(req.params.id, req.body)
    await employeeModel.save()
    res.send(employee)
  } catch (err) {
    res.status(500).send(err)
  }
})



app.delete('/api/v1/employees/:id', async (req, res) => {
  try {
    const employee = await employeeModel.findByIdAndDelete(req.params.id)

    if (!employee) res.status(404).send("No item found")
    res.status(200).send()
  } catch (err) {
    res.status(500).send(err)
  }
})

module.exports = app