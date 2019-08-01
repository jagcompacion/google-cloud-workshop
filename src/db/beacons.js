import { Schema, model } from "mongoose";

const schema = new Schema({
  name: String,
  latitude: Number,
  longitude: Number,
  isLast: Boolean
});

const Beacons = model("Beacons", schema);

export default Beacons;
