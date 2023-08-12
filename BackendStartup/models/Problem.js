const mongoose = require('mongoose');

const problemSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  startercode: {
    type: String,
    required: true
  },
  sample_tests: [
    {
      input:{type:String},
      output:{type:String}
    }
  ]
});

const Problem = mongoose.model('Problem', problemSchema);

module.exports = Problem;
