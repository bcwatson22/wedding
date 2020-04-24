"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

var models = [
  {
    name: "Guest",
    embedded: false
  },
  {
    name: "GuestContact",
    embedded: false
  },
  {
    name: "GuestPersonal",
    embedded: false
  },
  {
    name: "GuestRsvp",
    embedded: false
  },
  {
    name: "GuestResponse",
    embedded: false
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `https://wedding-server-e0acff40a9.herokuapp.com/wedding-service/prod`
});
exports.prisma = new exports.Prisma();
