const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RouteSchema = new Schema({

  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    // required: true
  },
  start:{
    type: [Number],
    default: [-122.428093, 37.759703]
  },
  end:{
    type: [Number],
    default: [-122.405640, 37.778519]
  }
  
});

module.exports = mongoose.model("route", RouteSchema);