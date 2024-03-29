const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({

  username: {
    type: String,
    required: true
  },
  accountType: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true,
    min: 6,
    max: 30
  },
  date: {
    type: Date,
    default: Date.now()
  },
  dogs: [
    {
      type: Array
    }
  ],
  routes: [
    { type: Schema.Types.ObjectId, ref: "route" }
  ]
})

// UserSchema.statics.findRoutes = function (userId) {
//   return this.findById(userId)
//     .populate("routes")
//     .then(user => user.routes);

// };

module.exports = mongoose.model("user", UserSchema);