const mongoose = require("mongoose");
const graphql = require("graphql");
const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLBoolean, GraphQLList } = graphql;
const User = mongoose.model("user");
const RouteType = require("./route_type");

const UserType = new GraphQLObjectType({
  name: "UserType",
  fields: () => ({
    _id: { type: GraphQLID },
    username: { type: GraphQLString },
    email: { type: GraphQLString },
    password: { type: GraphQLString },
    token: { type: GraphQLString },
    loggedIn: { type: GraphQLBoolean },
    routes: { 
      type: new GraphQLList(require("./route_type")),
      resolve(parentValue) {
        // console.log("parentValue", parentValue, parentValue._id)
        return User.findById(parentValue._id)
          .populate("routes")
          .then(user => user.routes);
      }
      }
    })
});

module.exports = UserType;