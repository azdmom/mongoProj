var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var jobSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  },
  note: {
    type: Schema.Types.ObjectId,
    ref: "Note"
  }
});

var jobs = mongoose.model("Jobs", jobSchema);

// Export the Article model
module.exports = jobs;
