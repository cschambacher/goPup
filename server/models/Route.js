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
    type: String,
    // default: "-122.428093 37.759703"
  },
  end:{
    type: String,
    // default: "-122.405640 37.778519"
  },
  user: {
    type: Schema.Types.ObjectId, 
    ref: "user" 
  },
  poop: {
    type: Number,
    default: 0
  }
  
});
RouteSchema.statics.updatePoop = (routeId, poop) => {
  const Route = mongoose.model("route");
  console.log("updatePoop", routeId)
  return Route.findById(routeId).then(route => {
    console.log("updatePoop", route)
    route.poop = poop
    return route.save();
  });
};

module.exports = mongoose.model("route", RouteSchema);