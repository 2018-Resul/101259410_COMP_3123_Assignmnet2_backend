const mongoose = require('mongoose');

var validateEmail = function (email) {
  var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email)
};


const EmployeeSchema = new mongoose.Schema({

  firstName: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },

  emailid: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    required: 'We need ypur email address to register!',
    validate: [validateEmail, 'Enter a valid email address'],
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email address']
  }

});

const Employee = mongoose.model("Employee", EmployeeSchema);
module.exports = Employee;