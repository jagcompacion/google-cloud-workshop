import { Schema, model } from "mongoose";

const schema = new Schema({
  userId: String,
  name: String,
  rssi: Number,
  timestamp: String,
});

const BeaconLogs = model("BeaconLogs", schema);

export default BeaconLogs;
