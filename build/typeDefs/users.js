"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _apolloServer = require("apollo-server");

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  type User {\n    id: String!\n    email: String!\n    username: String!\n    name: String\n    gender: String\n    age: String\n    role: String!\n    isArrived: Boolean!\n  }\n\n  input FilterInput {\n    isArrived: Boolean\n  }\n\n  type Query {\n    me: User!\n    users(filters: FilterInput!): [User!]\n  }\n\n  input MeInput {\n    name: String\n    gender: String\n    age: String\n    role: String\n    isArrived: Boolean\n  }\n\n  type Mutation {\n    register(\n      username: String!\n      email: String!\n      password: String!\n      name: String\n      gender: String\n      age: String\n    ): User!\n    login(username: String!, password: String!): String!\n    updateMe(me: MeInput!): User!\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var _default = (0, _apolloServer.gql)(_templateObject());

exports["default"] = _default;