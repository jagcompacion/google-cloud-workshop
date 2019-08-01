import { Schema, model } from "mongoose";

const schema = new Schema({
  username: String,
  name: String,
  gender: String,
  age: String,
  email: String,
  password: String,
  role: String,
  isArrived: Boolean
});

const Users = model("Users", schema);

export default Users;
