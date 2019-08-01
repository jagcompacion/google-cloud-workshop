import { Schema, model } from "mongoose";

const schema = new Schema({
  userId: String,
  timestamp: String,
  accelerationX: Number,
  accelerationY: Number,
  accelerationZ: Number,
  gyroX: Number,
  gyroY: Number,
  gyroZ: Number
});

const Movements = model("Movements", schema);

export default Movements;
