import express from "express";
import { parse } from "json2csv";
import Movements from "../db/movements";
import GPS from "../db/gps";
const router = express.Router();

const formatResponse = item => ({
  id: item._id.toString(), //eslint-disable-line
  timestamp: item.timestamp,
  accelerationX: item.accelerationX,
  accelerationY: item.accelerationY,
  accelerationZ: item.accelerationZ,
  gyroX: item.gyroX,
  gyroY: item.gyroY,
  gyroZ: item.gyroZ
});

const formatGPSResponse = item => ({
  id: item._id.toString(), //eslint-disable-line
  timestamp: item.timestamp,
  latitude: item.latitude,
  longitude: item.longitude,
  altitude: item.altitude,
  heading: item.heading,
  speed: item.speed,
  accuracy: item.accuracy
});

router.get("/download-movements/:id", async (req, res) => {
  const movements = await Movements.find({ userId: req.params.id });
  const csvString = parse(movements.map(item => formatResponse(item)));
  res.setHeader("Content-disposition", "attachment; filename=movements.csv");
  res.set("Content-Type", "text/csv");
  res.status(200).send(csvString);
});

router.get("/download-gps/:id", async (req, res) => {
  const gps = await GPS.find({ userId: req.params.id });
  const csvString = parse(gps.map(item => formatGPSResponse(item)));
  res.setHeader("Content-disposition", "attachment; filename=gps.csv");
  res.set("Content-Type", "text/csv");
  res.status(200).send(csvString);
});

export default router;
