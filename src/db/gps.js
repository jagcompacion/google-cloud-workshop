import { Schema, model } from "mongoose";

const schema = new Schema({
  userId: String,
  timestamp: String,
  latitude: Number,
  longitude: Number,
  altitude: Number,
  heading: Number,
  speed: Number,
  accuracy: Number
});

const GPS = model("GPS", schema);

export default GPS;
