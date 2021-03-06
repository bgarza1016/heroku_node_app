var mongoose = require('mongoose');
var AnimalSchema = new mongoose.Schema({
  name:           String,
  breed:          String,
  dob:            { type: Date, default: Date.now },
  gender:         { type: String },
  status:         {
                    type: String,
                    enum: ["adopted", "orphan"],
                    default: "orphan"
                  }
});
mongoose.model('Animal', AnimalSchema);
