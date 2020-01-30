const graphql = require("graphql");
const mongoose = require("mongoose");
const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLInt, GraphQLArray } = graphql;

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
        start: { type: GraphQLString },
        end: { type: GraphQLString }
      },
      async resolve(_, { title, description, start, end }, ctx) {
        // console.log("resolve", ctx);
        const validUser = await AuthService.verifyUser({ token: ctx.token });
        // console.log("newRoute", validUser);
        if (validUser.loggedIn) {
          const currUserId = validUser.id;
          // console.log("resolve", validUser);
          return new Route({ title, description, start, end, user: currUserId }).save()
            .then(route => User.findById(currUserId)
            .then(user => {
              user.routes.push(route)
              user.save()
              return user
            }))
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
    updateRoutePoop: {
      type: RouteType,
      args: {
        _id: { type: GraphQLID },
        poop: { type: GraphQLInt }
      },
      resolve(_, { _id, poop }) {
        // console.log("mutation", parentValue, routeId)
        return Route.updatePoop(_id, poop);
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