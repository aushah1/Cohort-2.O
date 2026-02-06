const express = require("express");
const cors = require("cors");
const path = require("path");
const noteModel = require("./models/note.model");

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static("./public"));

app.post("/api/create", async (req, res) => {
  let { title, description } = req.body;
  let note = await noteModel.create({ title, description });
  res.status(200).json({
    message: "Note created successfully",
    note,
  });
});

app.get("/api/notes", async (req, res) => {
  let notes = await noteModel.find();
  res.status(201).json({
    message: "Notes fetched succefully",
    notes,
  });
});
app.delete("/api/delete/:id", async (req, res) => {
  let notes = await noteModel.findOne({ _id: req.params.id });
  if (!notes) {
    res.status(400).json({
      message: "Invalid Id",
    });
  }
  await noteModel.deleteOne({ _id: req.params.id });
  res.status(200).json({
    message: "Notes deleted succefully",
  });
});
app.patch("/api/edit/:id", async (req, res) => {
  let { title, description } = req.body;
  let note = await noteModel.findOne({ _id: req.params.id });
  if (!note) {
    res.status(400).json({
      message: "Invalid Id",
    });
  }
  let updatedNote = await noteModel.updateOne(
    { _id: req.params.id },
    { title, description },
  );
  res.status(200).json({
    message: "Notes updated succefully",
    updatedNote,
  });
});

app.use("*name", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "/public/index.html"));
});

module.exports = app;
