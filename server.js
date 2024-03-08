import express from "express";

import dotenv from "dotenv";
dotenv.config();

import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

const port = process.env.PORT || 3000;
app.use(express.static("static"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./static/index.html"));
});

app.get("/speakers", (req, res) => {
  res.sendFile(path.join(__dirname, "./static/speakers.html"));
});

app.get("/feedback", (req, res) => {
  res.sendFile(path.join(__dirname, "./static/feedback.html"));
});

app.get("/Hillary_Goldwynn", (req, res) => {
  res.sendFile(path.join(__dirname, "./static/Hillary_Goldwynn.html"));
});

app.listen(port, (req, res) => {
  console.log(`Server is running on port ${port}`);
});
