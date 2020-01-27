const mongoose = require("mongoose");
const graphql = require("graphql");
const { GraphQLObjectType, GraphQLID, GraphQLInt, GraphQLString, GraphQLBoolean } = graphql;
const Route = mongoose.model("route");

const RouteType = new GraphQLObjectType({
    name: "RouteType",
    fields: () => ({
        _id: { type: GraphQLID },
        title: { type: GraphQLString },
        description: { type: GraphQLString },
        start: { type: GraphQLInt },
        end: { type: GraphQLInt }
    })
});

module.exports = RouteType;