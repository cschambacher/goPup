const graphql = require("graphql");
const mongoose = require("mongoose");
const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLInt } = graphql;

const UserType = require("./types/user_type");
const User = require("../models/User");
const RouteType = require("./types/route_type");
const Route = require("../models/Route");

const AuthService = require("../services/auth");

const mutations = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    newRoute: {
      type: RouteType,
      args: {
        title: { type: GraphQLString },
        description: { type: GraphQLString },
        start: { type: GraphQLInt },
        end: { type: GraphQLInt }
      },
      async resolve(_, { title, description, start, end }, ctx) {
        const validUser = await AuthService.verifyUser({ token: ctx.token });
        if (validUser.loggedIn) {
          return new Product({ title, description, start, end }).save();
        } else {
          throw new Error(
            "Sorry, you need to be logged in to create a route."
          );
        }
      }
    },
    deleteRoute: {
      type: RouteType,
      args: { _id: { type: GraphQLID } },
      resolve(_, { _id }) {
        return Route.remove({ _id });
      }
    },
    register: {
      type: UserType,
      args: {
        username: { type: GraphQLString },
        email: { type: GraphQLString },
        password: { type: GraphQLString },
        accountType: { type: GraphQLString }
      },
      resolve(_, args){
        return AuthService.register(args);
      }
    },
    logout: {
      type: UserType,
      args: {
        _id: { type: GraphQLID }
      },
      resolve(_, args){
        return AuthService.logout(args);
      }
    },
    login: {
      type: UserType,
      args: {
        email: { type: GraphQLString },
        password: { type: GraphQLString },
      },
      resolve(_, args){
        return AuthService.login(args)
      }
    },
    verifyUser: {
      type: UserType,
      args: {
        token: { type: GraphQLString }
      },
      resolve(_, args){
        return AuthService.verifyUser(args)
      }
    }
  }
});

module.exports = mutations;