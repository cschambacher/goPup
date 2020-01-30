const mongoose = require("mongoose");
const graphql = require("graphql");
const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLInt } = graphql;
const Route = mongoose.model("route");
const UserType = require("./user_type");
const User = mongoose.model("user");

const RouteType = new GraphQLObjectType({
    name: "RouteType",
    fields: () => ({
        _id: { type: GraphQLID },
        title: { type: GraphQLString },
        description: { type: GraphQLString },
        start: { type: GraphQLString },
        end: { type: GraphQLString },
        user: {
            type: require("./user_type"),
            resolve(parentValue) {
                return User.findById(parentValue.user)
                    .then(user => user)
                    .catch(err => null);
            } 
        },
        poop: { type: GraphQLInt }
    })
});

module.exports = RouteType;